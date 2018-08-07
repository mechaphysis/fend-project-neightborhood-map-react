import React, { Component } from 'react';
import hamburguer from './hamburguer-icon.svg'
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
import Search from './Search.js'

class App extends Component {

  state = {
    pois: [
      <li>Pena dos namorados</li>,
      <li>Pena do Equilibrio</li>,
      <li>Rio Uma</li>,
      <li>Castelo de Vilasobroso</li>,
      <li>Coto do Castro</li>,
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hamburguer} className="App-logo" alt="logo" />
          <h1 className="App-title">Local Sightseeing Map</h1>
        </header>
        <main className="main-content">
          <Search
            pois={this.state.pois}
          />
          <Map/>
        </main>
      </div>
    );
  }
}

export default App;
