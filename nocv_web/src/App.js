import React, { Component } from 'react'

import './App.css'
import './styles/Stylesheet.css'

import { PageRoutes } from './pages/PageRoutes'



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
        <PageRoutes />
      </div>
    );
  }
}

export default App;
