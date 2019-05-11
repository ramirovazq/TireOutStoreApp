import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default class PageButton extends React.Component {

  constructor(props) {
    super(props);    
  } //constructor

  changePage = (numPag) => {
    this.props.changePageHome(numPag)
  }

  render() {
    return (
          <TouchableOpacity
          onPress={() => this.changePage(this.props.paginaSig)}
          style={styles.button}>
            <Text style={styles.buttonText}>Pagina {this.props.paginaSig}</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: 'blue',
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
