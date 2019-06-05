import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SimpleElement from '../SimpleElement/SimpleElement';

export default class ElementList extends Component {

  constructor(props){
    super(props);
    this.state = { 
    };
    this.llantalist = this.llantalist.bind(this);
  }

  llantalist() {
    return this.props.llantas.map((llanta) => {
      return (
        <SimpleElement key={llanta.id} llanta={llanta} onAdd={this.props.onAdd} />
      )
    })
  }

  render() {
    return (
      this.llantalist()  
    );
  }

}

