import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import SubListElement from '../SubListElement/SubListElement';

export default class SimpleElement extends Component {

  render() {
    return (
      <View>
      	<Text>{this.props.llanta.dot} {this.props.llanta.marca.nombre}</Text>
      	<FlatList
          data={[
            {key: 'Devin'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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