import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default class LogoutButton extends React.Component {

  constructor(props) {
    super(props);    
    this.cierraSesion = this.cierraSesion.bind(this);
  } //constructor

  cierraSesion() {
            console.log('cierra sesion ...0');
            this.props.asignUserVacio(null, null, null);
  }

  render() {
    return (
          <TouchableOpacity
          style={styles.button}
          onPress={this.cierraSesion}>
            <Text style={styles.buttonText}> Salida</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
});
