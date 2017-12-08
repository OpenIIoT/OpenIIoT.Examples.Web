import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Crypto from './crypto.js';
import Item from './item.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Item fqn="OpenIIoT.Simulation.DateTime.Time"/>
      </div>
    );
  }
}

export default App;
