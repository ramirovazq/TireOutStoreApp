import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class SimpleButtonElement extends Component {

  constructor(props) {
      super(props)
      this.state = { 
        count: 0
      }
      this.checkLimits = this.checkLimits.bind(this);
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    //console.log('onclick .......');
    this.props.onAdd({idLlanta : this.props.idLlanta,
                     bodega: this.props.bodega, 
                     bodega_id: this.props.bodega_id, 
                     permisionario: this.props.permisionario, 
                     permisionario_id: this.props.permisionario_id, 
                     cantidad: 1,
                     dot: this.props.dot,
                     marca: this.props.marca,
                     medida: this.props.medida});

  }


  lessCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  checkLimits(minnumber=0, maxnumber=4) {
    let check = (this.state.count < maxnumber) && (this.state.count >= minnumber);
    return check
  }
  
  render() {
    const renderAction = this.props.isRemoval;
    const maxnumberProps = this.props.maxNumber;
    const minnumberProps = this.props.minNumber;
    const varadd = '+';
    const varless = '-';
    return (

          <TouchableOpacity 
            style={this.checkLimits(minnumberProps, maxnumberProps) ? styles.button : styles.buttondis } 
            onPress={renderAction ? this.lessCount : this.addCount} 
            disabled={!this.checkLimits(minnumberProps, maxnumberProps)} 
          >
          <Text style={styles.buttonText}> 
          {renderAction ? varless : varadd } 
          { this.state.count !== 0 ? this.state.count: null } </Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 40,
    height: 25,
  },
  buttonText:{
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttondis: {
    alignItems: 'center',
    backgroundColor: '#cbcbcb',
    width: 40,
    height: 25,
  },
});
