import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import SimpleButtonElement from '../SimpleButtonElement/SimpleButtonElement';

export default class SimpleElement extends Component {

  render() {
    return (
      <View>
      	<Text style={styles.itemllanta}>{this.props.llanta.dot} {this.props.llanta.marca.nombre} {this.props.llanta.medida.nombre} {this.props.llanta.posicion.nombre} {this.props.llanta.status.nombre}</Text>
      	<FlatList
          data={this.props.llanta.detalle}
          keyExtractor={(item, index) => item.id+this.props.llanta.id+index}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>{item.bodega} {item.permisionario} [cantidad {item.cantidad}]</Text>
              <SimpleButtonElement 
                maxNumber={item.cantidad} 
                minNumber={0} 
                isRemoval={false} 
                idLlanta={this.props.llanta.id}
                bodega={item.bodega}
                bodega_id={item.bodega_id}
                permisionario={item.permisionario}
                permisionario_id={item.permisionario_id}
                onAdd={this.props.onAdd} 
                dot={this.props.llanta.dot}
                marca={this.props.llanta.marca.nombre}
                medida={this.props.llanta.medida.nombre}
              />               
            </View>
            )}
        />
        <Text style={styles.itemvacio}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  itemllanta: {
    fontWeight: "bold",
    padding: 8,
    fontSize: 15,
    height: 44,
  },
  item: {
    padding: 8,
    fontSize: 12,
    height: 44,
  },
  itemvacio: {
    paddingTop: 12
  },
})