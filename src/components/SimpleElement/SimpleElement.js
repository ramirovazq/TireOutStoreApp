import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import SubListElement from '../SubListElement/SubListElement';

export default class SimpleElement extends Component {

  render() {
    return (
      <View>
      	<Text>{this.props.llanta.dot} {this.props.llanta.marca.nombre} {this.props.llanta.medida.nombre} {this.props.llanta.posicion.nombre} {this.props.llanta.status.nombre}</Text>
      	<FlatList
          data={this.props.llanta.detalle}
          keyExtractor={(item, index) => item.id+this.props.llanta.id}
          renderItem={({item}) => <Text style={styles.item}>{item.bodega} {item.permisionario} [{item.cantidad}]</Text>}
        />
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