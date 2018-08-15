import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import hamburguer from './hamburguer-icon.svg'
import './App.css';
import MapContainer from './MapContainer.js'
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
    pois: [],
    clickedMarker: 0,
    center: { lat: 42.24059889999999, lng: -8.7207268 },
    zoom: 13,
    query : '',
    filteredPois: []
  }

/* We load and fetch asynchronously the list of POIs by
 * wrapping the fetching inside componentDidMount()
 */
  componentDidMount() {
    DataAPI.fetchPois().then( pois => {
      this.setState({ pois })
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

  openSearch = () => {
    let searchMenu = document.getElementsByClassName('search-poi')
    searchMenu[0].classList.toggle('open')
  }

  /* Logic for query and filtering:
   * We gonna need a query inside our state for updating
   * the filtering results:
   * Most of the logic is reused from previous FEND Project P7
   * https://github.com/mechaphysis/fend-project-myreads-react-app
   * which is itself based on reactnd-contacts code along app:
   * https://github.com/udacity/reactnd-contacts-complete
   */

  /* With this update method we will update the state.query
   * depending on user input
   */

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  /* This small method allows us to reset te query to empty string
   * which in turn will show again the full list of pois
   */
  clearQuery = () => {
    this.setState({ query: '' })
  }

  filterByQuery = (query) => {
    this.setState({query: query.trim() })
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.setState({filteredPois: this.state.pois.filter((poi) => match.test((poi.name))) })
    } else {
      this.setState({filteredPois : this.state.pois})
    }
    //We order by name the list of POIs:
    this.state.filteredPois.sort(sortBy('name'))
  }


  render() {
    console.log(this.state.pois)
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.openSearch} src={hamburguer} className="App-logo" alt="logo" />
          <h1 className="App-title">Local Sightseeing Map</h1>
        </header>
        <main className="main-content">
            <Search
              pois={this.state.pois}
              filteredPois={this.state.filteredPois}
              query={this.state.query}
              filterByQuery={this.filterByQuery}
              clearQuery={this.clearQuery}
            />
          <MapContainer handleMarkerClick ={ this.handleMarkerClick }
            center={ this.state.center }
            zoom={ this.state.zoom }
            pois={ this.state.filteredPois }
            clickedMarker={ this.state.clickedMarker }
          />
        </main>
      </div>
    );
  }
}

export default App;
