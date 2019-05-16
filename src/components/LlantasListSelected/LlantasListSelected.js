import React, { Component } from 'react';
import { ScrollView, FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
// import Select from 'react-native-simple-select'
//import ElementList from '../ElementList/ElementList';

export default class LlantasListSelected extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: {}
    }
  }

  componentDidMount(){
    console.log("antes de montar ....");
    this.setState({
        isLoading: false          
    });
    
    console.log('this props llantasSelected');
    console.log(this.props.llantasSelected);
    /*
    return fetch('http://192.168.0.4:8000/api/v0/llanta/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Authorization': `Token ${this.props.tokenUser}`,
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('responseJson...............');
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    */
  }

  componentWillUnmount(){
    console.log("DESTRUIDO de montar ....");
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Llantas seleccionadas</Text>
        <FlatList
          data={this.props.llantasSelected}
          keyExtractor={(item, index) => item.bodega+item.idLlanta+item.permisionaro}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>{item.cantidad} llanta; Dot: {item.dot}; Marca: {item.marca}</Text>
              <Text style={styles.item}>{item.medida};Bodega: {item.bodega};{item.permisionario}</Text>
              <Text style={styles.item}></Text>
            </View>
            )}
        />
        <Text>Seleccion el número económico</Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
