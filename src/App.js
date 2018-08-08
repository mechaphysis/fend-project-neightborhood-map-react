import React, { Component } from 'react';
import hamburguer from './hamburguer-icon.svg'
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'
import Search from './Search.js'
import * as DataAPI from './DataAPI'

class App extends Component {
/* inside the Parent state we gonna pass the array of POI (POI stands for Point of Interests)
 * retrieved using FourSquare API. We will store also which Marker has been clicked, the center of
 * our map and the zoom level. Passing this objects to the Parent state will make them accesible
 * to both its children (Map and Search) any update on the state will be reflected on both Children.
 * We do it this way to ensure that the UI is rerendered appropiately for both components any time a change
 * is triggered in either of them.
 */
  state = {
    locations: [],
    clickedMarker: 0,
    center: { lat: 42.24059889999999, lng: -8.7207268 },
    zoom: 13
  }

/* We load and fetch asynchronously the list of POIs by
 * wrapping the fetching inside componentDidMount()
 */
  componentDidMount() {
    DataAPI.fetchLocations().then( locations => {
      this.setState({ locations })
    })
  }

  /* As stated in: https://tomchentw.github.io/react-google-maps/
  * We are also going to need a handler method for clicks on Markers:
  * By passing as center value the lat and lng of the marker the center
  * of our map will switch to be the location of the clicked Marker
  * We also increment a bit the value for zoom, so it will zoom in
  * the marker area
  */

  handleMarkerClick = (evt, latLng, marker) => {
    console.log("Marker clicked!")
    this.setState({
      clickedMarker : marker,
      center : latLng,
      zoom : 20 })
    }
  /* The method below will reset state to default after closing
   * an infoWindow
   */
  handleInfoWindowEvent = (e) => {
    this.setState({
      clickedMarker: 0,
      center: { lat: 42.24059889999999, lng: -8.7207268 },
      zoom: 13
    })
  }

  render() {
    console.log(this.state.locations)
    return (
      <div className="App">
        <header className="App-header">
          <img src={hamburguer} className="App-logo" alt="logo" />
          <h1 className="App-title">Local Sightseeing Map</h1>
        </header>
        <main className="main-content">
          <Map handleMarkerClick ={ this.handleMarkerClick }
            center={ this.state.center }
            zoom={ this.state.zoom }
            locations={ this.state.locations }
            clickedMarker={ this.state.clickedMarker }
          />
        </main>
      </div>
    );
  }
}

export default App;
