import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import LlantasList from '../LlantasList/LlantasList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);    
    this.onLogout = this.onLogout.bind(this);
  } //constructor

  onLogout() {
            this.props.asignUser(null, null);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> Home Llantas {this.props.currentUsername} || {this.props.tokenUser}</Text> 

          <LlantasList></LlantasList>

          <TouchableOpacity
          style={styles.button}
          onPress={this.onLogout}
          >
            <Text style={styles.buttonText}> Salir</Text>
          </TouchableOpacity>


      </View>
    );
  }
}

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
