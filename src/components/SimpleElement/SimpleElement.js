import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SimpleElement extends Component {

  render() {
    return (
      <View><Text>{this.props.llanta.dot}</Text></View>
    );
  }
}

