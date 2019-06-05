import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import ElementList from '../ElementList/ElementList';
import MyBasics from '../../util/MyBasics';

export default class LlantasList extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: {},
      filteredSource: [],
      textSearch: ''
    };
    this.onChange = this.onChange.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount(){    
    MyBasics.dameLlantas(this.props)
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson, 
        });
      })
  } // componentDidMount

  componentWillUnmount(){
    this.setState({
      dataSource: {}
    });
  } // componentWillIUMount

  onChange(texto) {
    this.filterList(texto).then((result) => { 
      this.setState({ filteredSource: result });
    }).catch(function (error) {
     console.log(error);
    });
  }

  filterList(texto) {
    let llantas = this.state.dataSource;
    let q = texto;    
    if (q.length >= 3) { // only filters when texto is  >= 3
      var promise1 = new Promise(function(resolve, reject) {
        llantas = llantas.filter(function(elemento) {
          return elemento.dot.indexOf(q) != -1; // returns true or false
        });
      resolve(llantas);
      }); // promise1
      return promise1
    } else {
        var promise1 = new Promise(function(resolve, reject) {
          resolve([]);
        }); // promise1
        return promise1;
    } // else
  } // filterList

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text> inventario cargado ...</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Busca el dot"
            onChangeText={(text) => this.onChange(text)}
          />
        <ScrollView>
            <ElementList llantas={this.state.filteredSource} onAdd={this.props.onAdd} />
          </ScrollView>
        </View>
      );
    } // else 
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
});
