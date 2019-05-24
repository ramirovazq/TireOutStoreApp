import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import LlantasList from '../LlantasList/LlantasList';
import LlantasListSelected from '../LlantasListSelected/LlantasListSelected';
import LogoutButton from '../LogoutButton/LogoutButton';
import PageButton from '../PageButton/PageButton';
import SendButton from '../SendButton/SendButton';
import {loginURI} from '../../util/Mylogin';

export default class Home extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      pageStep: 1,
      llantasSelected: [],
      economicoSelected: {}
    };
    this.addLlanta = this.addLlanta.bind(this);
    this.sendDataCallBack = this.sendDataCallBack.bind(this);
  } //constructor


  containsLlanta(obj, list) {
    // returns true/false y el index en que se encuentra en el array
    let i;
    for (i = 0; i < list.length; i++) {
        if ((list[i].idLlanta === obj.idLlanta) && (list[i].bodega === obj.bodega) &&  (list[i].permisionario === obj.permisionario)) {
            return [true, i];
        }
    }
    return [false, i];
  }

  sendDataCallBack() {
    console.log("se envian todos los datos ....llantasSelected");
    console.log(this.state.llantasSelected);
    console.log("se envian todos los datos ....economicoSelected");
    console.log(this.state.economicoSelected);
    fetch(`${loginURI}/api/v0/vale/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.props.tokenUser}`,
      },
      body: JSON.stringify({
        "no_folio": "25",
        "observaciones_grales": "Desde la app yeah !!!",
        "fecha_vale": "2019-05-23",
        "tipo_movimiento": "2",//movimiento salida
        "persona_asociada": "1",
        "creador_vale": "1"
      })//stringify

    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log("Respuesta del Endpoint .....")
        console.log('responseJson...............');
        console.log(responseJson);
    })
    .catch((error) =>{
      console.error("ERROR ....");
      console.error(error);
    });


  }

  addLlanta(llanta) {
    let llantas = this.state.llantasSelected;
    let alreadyExist = this.containsLlanta(llanta, llantas)
    if (!alreadyExist[0]) { // si no existe
      llantas.push(llanta);
    } else { // si ya existe, simplemente se adiciona 
      llantas[alreadyExist[1]].cantidad = llantas[alreadyExist[1]].cantidad + 1
    } // else
    this.setState({llantasSelected: llantas});
    // console.log(llantas);
  }

  changePageCallBack = (numPag) => {
    this.setState({
      pageStep: numPag
    })
  }

  economicoSelectedCallBack = (user) => {
    console.log("... selected from parent ...");
    console.log(user);
    this.setState({
      economicoSelected: user
    })

  }

  render() {
    if (this.state.pageStep === 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}> Paso 1 |{this.state.pageStep}|[{this.props.currentUsername}]</Text> 
            <LlantasList tokenUser={this.props.tokenUser} onAdd={this.addLlanta} ></LlantasList>
            <PageButton paginaSig={2} changePageHome={this.changePageCallBack}></PageButton>
            <LogoutButton asignUserVacio={this.props.asignUser} ></LogoutButton>
        </View>
      );
    } else if (this.state.pageStep === 2) { //if
      return (
          <View style={styles.container}>
            <Text style={styles.titleText}> Paso 2 |{this.state.pageStep}|{this.props.currentUsername}</Text>
              <LlantasListSelected tokenUser={this.props.tokenUser} llantasSelected={this.state.llantasSelected} economicoSelected={this.economicoSelectedCallBack}></LlantasListSelected>

              <SendButton sendData={this.sendDataCallBack} />
              <PageButton paginaSig={1} changePageHome={this.changePageCallBack}></PageButton>
              <LogoutButton asignUserVacio={this.props.asignUser} ></LogoutButton>
          </View>
      ); 
    }
  } //render

} //Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
