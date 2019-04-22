import React from 'react';
import LoginAlmacen from './src/components/LoginAlmacen/LoginAlmacen';
import Home from './src/components/Home/Home';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      tokenUser: null,
    };

    this.asignUserCallback = this.asignUserCallback.bind(this);

  } //constructor

   asignUserCallback(tokenFromChild, userFromChild) {
        this.setState({ tokenUser: tokenFromChild, currentUser: userFromChild });
   }

  render() {
    	if (!this.state.tokenUser) {
      		return <LoginAlmacen asignUser={this.asignUserCallback}></LoginAlmacen>
		}
		return <Home tokenUser={this.state.tokenUser}  currentUser={this.state.currentUser} />;
  }
}