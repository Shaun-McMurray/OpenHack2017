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
        <Start />
      </div>
    );
  }
}

export default App;
