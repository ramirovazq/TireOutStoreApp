import React, { Component } from 'react';
import { ScrollView, FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import PickerEconomico from '../PickerEconomico/PickerEconomico';

export default class LlantasListSelected extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: false,
      economicSource: {}
    } 
  }

  componentDidMount(){
  } // componentDidMount

  componentWillUnmount(){
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Llantas seleccionadas</Text>
        <FlatList
          data={this.props.llantasSelected}
          keyExtractor={(item, index) => item.bodega+item.idLlanta+item.permisionaro}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>{item.cantidad} llanta; Dot: {item.dot}; Marca: {item.marca}</Text>
              <Text style={styles.item}>{item.medida};Bodega: {item.bodega};{item.permisionario}</Text>
              <Text style={styles.item}></Text>
            </View>
            )}
        />
        <Text>Seleccione el número económico</Text>
        <PickerEconomico tokenUser={this.props.tokenUser} />
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
