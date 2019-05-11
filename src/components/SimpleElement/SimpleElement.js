import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import SimpleButtonElement from '../SimpleButtonElement/SimpleButtonElement';

export default class SimpleElement extends Component {

  render() {
    return (
      <View>
      	<Text>{this.props.llanta.dot} {this.props.llanta.marca.nombre} {this.props.llanta.medida.nombre} {this.props.llanta.posicion.nombre} {this.props.llanta.status.nombre}</Text>
      	<FlatList
          data={this.props.llanta.detalle}
          keyExtractor={(item, index) => item.id+this.props.llanta.id}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>{item.bodega} {item.permisionario} [{item.cantidad}]</Text>
              <SimpleButtonElement 
                maxNumber={item.cantidad} 
                minNumber={0} 
                isRemoval={false} 
                idLlanta={this.props.llanta.id}
                bodega={item.bodega}
                permisionario={item.permisionario} 
              /> 
            </View>
            )}
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