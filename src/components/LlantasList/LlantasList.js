import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ElementList from '../ElementList/ElementList';
import MyBasics from '../../util/MyBasics';

export default class LlantasList extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: {},
      stringSearch: ""
    }
  }

  componentDidMount(){    
    MyBasics.dameLlantas(this.props)
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson, 
        });
      })
  } // componentDidMount

  componentWillUnmount(){
    this.setState({
      dataSource: {}
    });
  } // componentWillIUMount

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    } else if (this.state.stringSearch == "hola") {
      return (
        <View style={styles.container}>
          <ScrollView>
            <ElementList llantas={this.state.dataSource} onAdd={this.props.onAdd} />
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text> inventario cargado ...</Text>
        </View>
      );
    } // else 
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
});
