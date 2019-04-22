import React from 'react';
import {Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import Mylogin from '../../util/Mylogin';

export default class LoginAlmacen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onLogin = this.onLogin.bind(this);
  } //constructor

  onLogin() {
    Alert.alert('Las credenciales', `username: ${this.state.username} + password: ${this.state.password}`);
      Mylogin.simplelogin(this.state.username, this.state.password).then(
        resultado => {
          this.props.asignUser(resultado['token'], resultado['user_id']);
        }
      );
  }

  validateForm() {
    return this.state.username.length > 4 && this.state.password.length > 4;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> Login {this.props.tokenUser} || {this.props.currentUser} </Text>          
          <TextInput
            value={this.state.username}
            keyboardType = 'email-address'
            onChangeText = {(username) => this.setState({ username })}
            placeholder = 'usuario'
            placeholderTextColor = 'white'
            style = {styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText = {(password) => this.setState({password})}
            placeholder= 'contraseña'
            secureTextEntry={true}
            placeholderTextColor = 'white'
            style={styles.input}
          />

          <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
          disabled={!this.validateForm()}
          >
            <Text style={styles.buttonText}> Login</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
