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
  } //constructor


  render() {
    	if (!this.state.currentUser) {
      		return <LoginAlmacen></LoginAlmacen>
		}
		return <Home tokenUser={this.state.tokenUser} />;
  }
}