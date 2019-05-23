import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class ElementPicker extends Component {

   economiclist() {
       return this.props.economicos.map((economico) => {
         return (
           <Picker.Item label ={economico.nombre} value ={economico.id} />
         )
       })
     }

  render() {
      return (
        this.economiclist()  
      );
    }

}

export default ElementPicker