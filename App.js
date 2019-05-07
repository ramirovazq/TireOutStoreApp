import React from 'react';
import LoginAlmacen from './src/components/LoginAlmacen/LoginAlmacen';
import Home from './src/components/Home/Home';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      tokenUser: null,
      currentUsername: null
    };

    this.asignUserCallback = this.asignUserCallback.bind(this);

  } //constructor

   asignUserCallback(tokenFromChild, userFromChild, usernameFromChild) {
        this.setState({ tokenUser: tokenFromChild, currentUser: userFromChild, currentUsername: usernameFromChild });
   }

  render() {
    	if (!this.state.tokenUser) {
      		return <LoginAlmacen asignUser={this.asignUserCallback}></LoginAlmacen>
		}
		return <Home asignUser={this.asignUserCallback} tokenUser={this.state.tokenUser}  currentUser={this.state.currentUser} currentUsername={this.state.currentUsername} asignUser={this.asignUserCallback} />;
  }
}