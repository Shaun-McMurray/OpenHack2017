import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
//Joacim Eberlen
import { Start } from './pages/Start'

class App extends Component {
  //Joacim Eberlen
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  // Added the <Start />

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Start />
        </p>
      </div>
    );
  }
}

export default App;
