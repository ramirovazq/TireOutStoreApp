import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import LlantasList from '../LlantasList/LlantasList';
import LlantasListSelected from '../LlantasListSelected/LlantasListSelected';
import LogoutButton from '../LogoutButton/LogoutButton';
import PageButton from '../PageButton/PageButton';
import SendButton from '../SendButton/SendButton';
import {loginURI} from '../../util/Mylogin';
import MyBasics from '../../util/MyBasics';

export default class Home extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      pageStep: 1,
      llantasSelected: [],
      economicoSelected: {},
      msgVale: "",
      msgMovimientos: ""
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

  sendDataMovimiento(vale, movimiento){
      let datasend = {
        "fecha_movimiento": MyBasics.diadehoy(),
        "cantidad": movimiento.cantidad,//movimiento salida harcoded
        "observacion": "test movimiento 1",
        "vale": vale.id,
        "tipo_movimiento": vale.tipo_movimiento,
        "origen":movimiento.bodega_id,
        "destino":this.state.economicoSelected.user,
        "llanta":movimiento.idLlanta,
        "creador":this.props.currentUser,
        "permisionario": movimiento.permisionario_id
      };
    MyBasics.generaMovimiento(this.props, datasend)
      .then((respuesta) => { 
        let msgMovs = this.state.msgMovimientos;
        if (!('error' in respuesta)) {
          msgMovs = msgMovs + ` movimiento # ${respuesta.id} agregado \n`
          this.setState({msgMovimientos: msgMovs});
        } else {
          msgMovs = msgMovs + ` error movimiento  \n` 
          this.setState({msgMovimientos: msgMovs});
        }
      });
  } // sendDataMovimiento

  sendDataCallBack() {
    MyBasics.generaVale(this.props)
      .then((respuesta) => { 
        if (!('error' in respuesta)) {
          this.setState({
            msgVale: `Vale # ${respuesta.no_folio} agregado con éxito`
          })           
          let vale = respuesta;          
          this.state.llantasSelected.forEach( (llanta) => {this.sendDataMovimiento(vale, llanta)});
        } else {
          this.setState({
              msgVale: ` No se agregó el Vale` 
          })           
        }
        this.changePageCallBack(3);
      });

  }//sendDataCallBack

  addLlanta(llanta) {
    let llantas = this.state.llantasSelected;
    let alreadyExist = this.containsLlanta(llanta, llantas)
    if (!alreadyExist[0]) { // si no existe
      llantas.push(llanta);
    } else { // si ya existe, simplemente se adiciona 
      llantas[alreadyExist[1]].cantidad = llantas[alreadyExist[1]].cantidad + 1
    } // else
    this.setState({llantasSelected: llantas});
  }//addLlanta

  changePageCallBack = (numPag) => {

    if (numPag === 1) {
    console.log("ping 1 .....................");
    this.setState({
      llantasSelected: [],
      economicoSelected: {},
      msgVale: "",
      msgMovimientos: ""
      }) 
    }
    this.setState({
      pageStep: numPag
    }) 
  } //changePageCallback

  economicoSelectedCallBack = (user) => {
    this.setState({
      economicoSelected: {"user": user}
    })

  }

  render() {
    if (this.state.pageStep === 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}> Busca la llanta {this.props.currentUsername}</Text> 
            <LlantasList tokenUser={this.props.tokenUser} onAdd={this.addLlanta} ></LlantasList>
            <PageButton paginaSig={2} changePageHome={this.changePageCallBack}></PageButton>
            <LogoutButton asignUserVacio={this.props.asignUser} ></LogoutButton>
        </View>
      );
    } else if (this.state.pageStep === 2) { //if
      return (
          <View style={styles.container}>
            <Text style={styles.titleText}> Paso {this.state.pageStep}|{this.props.currentUsername}</Text>
              <LlantasListSelected tokenUser={this.props.tokenUser} llantasSelected={this.state.llantasSelected} economicoSelected={this.economicoSelectedCallBack}></LlantasListSelected>

              <SendButton sendData={this.sendDataCallBack} validateEconomico={this.state.economicoSelected}  validateLlantas={this.state.llantasSelected}/>
              <PageButton paginaSig={1} changePageHome={this.changePageCallBack}></PageButton>
              <LogoutButton asignUserVacio={this.props.asignUser} ></LogoutButton>
          </View>
      ); 
    } else if (this.state.pageStep === 3) { //if
      return (
          <View style={styles.container}>
              <Text style={styles.titleText}> Paso 3</Text>
              <Text style={styles.simpleText}>
                {this.state.msgVale} 
              </Text>
              <Text style={styles.simpleText}>
                {this.state.msgMovimientos} 
              </Text>
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
  TitleText:{
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleText:{
    fontSize: 18,
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
