import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, View } from 'react-native';
import ElementList from '../ElementList/ElementList';
import SimpleButtonElement from '../SimpleButtonElement/SimpleButtonElement';

export default class LlantasList extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: {}
    }
  }

  componentDidMount(){
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
        <SimpleButtonElement maxNumber={6} minNumber={-3} isRemoval={true} />
        <ScrollView>
          <ElementList llantas={this.state.dataSource} />
        </ScrollView>
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