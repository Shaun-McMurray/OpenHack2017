import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'
//Joacim Eberlen
import { Start } from './pages/Start'
import { ProfileCreation } from './pages/ProfileCreation'
import { Login } from './pages/Login'

import './styles/Stylesheet.css'

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
        <ProfileCreation />
      </div>
    );
  }
}

export default App;
