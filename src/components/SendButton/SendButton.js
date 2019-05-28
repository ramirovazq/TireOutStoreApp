import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default class SendButton extends React.Component {

  constructor(props) {
    super(props);    
  } //constructor

  sendAllData = () => {
    this.props.sendData()
  }

  validateSelectedEconomico() {
    if (Object.keys(this.props.validateEconomico).length) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    return (
          <TouchableOpacity
          onPress={() => this.sendAllData()}
          disabled={!this.validateSelectedEconomico()}
          style={this.validateSelectedEconomico() ? styles.button : styles.buttondis } >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: 'green',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
    buttondis: {
    alignItems: 'center',
    backgroundColor: '#cbcbcb',
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
