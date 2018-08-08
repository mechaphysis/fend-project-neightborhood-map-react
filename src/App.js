import React, { Component } from 'react';
import hamburguer from './hamburguer-icon.svg'
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
import Search from './Search.js'

class App extends Component {
/* inside the Parent state we gonna pass the array of POI (POI stands for Point of Interests)
 * retrieved using FourSquare API. We will store also which Marker has been clicked, the center of
 * our map and the zoom level. Passing this objects to the Parent state will make them accesible
 * to both its children (Map and Search) any update on the state will be reflected on both Children.
 * We do it this way to ensure that the UI is rerendered appropiately for both components any time a change
 * is triggered in either of them.
 */
  state = {
    poisArray: [],
    clickedMarker: 0,
    center: { lat: 42.24059889999999, lng: -8.7207268 },
    zoom: 13
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hamburguer} className="App-logo" alt="logo" />
          <h1 className="App-title">Local Sightseeing Map</h1>
        </header>
        <main className="main-content">
          <Map
            center={this.state.center}
            zoom={this.state.zoom}
            poisArray={this.state.poisArray}
            clickedMarker={this.state.clickedMarker}
          />
        </main>
      </div>
    );
  }
}

export default App;
