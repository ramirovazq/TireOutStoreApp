import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import LlantasList from '../LlantasList/LlantasList';
import LogoutButton from '../LogoutButton/LogoutButton';
import PageButton from '../PageButton/PageButton';

export default class Home extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      pageStep: 1,
      llantasSelected: []
    };
  } //constructor

  changePageCallBack = (numPag) => {
    this.setState({
      pageStep: numPag
    })
  }


  render() {
    if (this.state.pageStep === 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}> Paso 1 |{this.state.pageStep}|[{this.props.currentUsername}]</Text> 
            <LlantasList tokenUser={this.props.tokenUser} ></LlantasList>
            <PageButton paginaSig={2} changePageHome={this.changePageCallBack}></PageButton>
            <LogoutButton asignUserVacio={this.props.asignUser} ></LogoutButton>
        </View>
      );
    } else if (this.state.pageStep === 2) { //if
      return (
          <View style={styles.container}>
            <Text style={styles.titleText}> Paso 2 |{this.state.pageStep}|{this.props.currentUsername}</Text>
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
