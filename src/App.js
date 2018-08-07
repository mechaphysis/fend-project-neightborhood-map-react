import React, { Component } from 'react';
import hamburguer from './hamburguer-icon.svg'
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
import Search from './Search.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hamburguer} className="App-logo" alt="logo" />
          <h1 className="App-title">Local Sightseeing Map</h1>
        </header>
        <Map/>
        <Search/>
      </div>
    );
  }
}

export default App;
