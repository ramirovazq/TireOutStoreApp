import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class SimpleButtonElement extends Component {

  constructor(props) {
      super(props)
      this.state = { 
        count: 0,
        enabledbutton: null
      }
      this.checkLimits = this.checkLimits.bind(this);
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  checkLimits(minnumber=0, maxnumber=4) {
    let check = (this.state.count < maxnumber) && (this.state.count > minnumber);
    console.log("--------------check");
    console.log(check);
    console.log("--------------enabledbutton");
    console.log(this.state.enabledbutton);
    return check
  }



  lessCount = () => {
    this.setState({
      count: this.state.count - 1
    })
    if (this.state.count === this.props.minNumber) {
      this.setState({
        enabledbutton: false
      })
    } else {
      this.setState({
        enabledbutton: true
      })      
    }
  }

  
  render() {
    const renderAction = this.props.isRemoval;
    const maxnumberProps = this.props.maxNumber;
    const minnumberProps = this.props.minNumber;
    return (
          <TouchableOpacity style={this.state.enabledbutton ? styles.button : styles.buttondis } onPress={this.lessCount} disabled={!this.checkLimits(minnumberProps, maxnumberProps)} >
          <Text style={styles.buttonText}> + { this.state.count !== 0 ? this.state.count: null } </Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 30,
    height: 20,
  },
  buttonText:{
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttondis: {
    alignItems: 'center',
    backgroundColor: '#cbcbcb',
    width: 30,
    height: 20,
  },
});