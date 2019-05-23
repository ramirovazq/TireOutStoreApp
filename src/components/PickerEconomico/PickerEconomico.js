import React, { Component } from 'react';
import { View, Text, Picker, ActivityIndicator, StyleSheet } from 'react-native'
import {loginURI} from '../../util/Mylogin';

export default class PickerEconomico extends Component {


   constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      economicSource: {},
      user: ''
    };
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount(){
    fetch(`${loginURI}/api/v0/economico/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Authorization': `Token ${this.props.tokenUser}`,
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('responseJson...............');
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          economicSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  } // componentDidMount

  updateUser(user) {
    this.setState({user: user});
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
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               {this.state.economicSource.map((item, key)=>(
                  <Picker.Item label={item.nombre} value={item.nombre} key={item.nombre}/>)
               )}            
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})