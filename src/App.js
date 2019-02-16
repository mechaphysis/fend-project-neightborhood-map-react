import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './App.scss';
import MapBox from "./components/MapBox"
import Search from './Search.js'
import * as DataAPI from './DataAPI'
import Header from "./components/Header"
import Footer from './components/Footer';


/* The method .gm_authFailure below handles error in API key
 * authentication for Google Maps API. It is necessary, otherwise
 * if the API key fails the user is left wondering what is happening with
 * the web app not loading:
 */
window.gm_authFailure = function() {
    alert("Google Maps API Key Authentication error! Try refreshing the page again.")
}

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
    infoWindowId: -1,
    center: { lat: 42.24059889999999, lng: -8.7207268 },
    zoom: 13,
    query : '',
    filteredPois: [],
    filterHidden: "true",
    venueDetails: []
  }

  /* Due to limitations in FourSquare API for Venue Details, we implement
   * inside handleItemClick method the data fetching for each marker. This way,
   * the data request to FourSquare API would only be made each time the user
   * clicks on a marker. Otherwise we would reach the limit of 50 daily requests
   * very soon.
  */

  getPoiDetails = (poiId) => {
    DataAPI.fetchDetails(poiId).then(
      (data) => {
        this.setState({venueDetails: data.response.venue})
        console.log(data.response.venue, "tips: ", data.response.venue.tips.groups)})
        .catch(error => {
      window.alert("Error loading Venue Details from FourSquare API", error)
    })
  }

  handleItemClick = (event, latLng,listItem) => {
    console.log('--item click: ', listItem)
    this.setState({
      infoWindowId: listItem,
    })
  this.getPoiDetails(listItem)
  }

/* We load and fetch asynchronously the list of POIs by
 * wrapping the fetching inside componentDidMount()
 * we load the list of Pois also in filteredPois so this second list contains
 * by default all locations and the map shows up everything when the user first
 * enter the app
 */
 // TODO: KEEP WORKING ON FETCHING VENUE DETAILS FOR EVERY POI
  componentDidMount() {
    DataAPI.fetchPois().then( pois => {
      this.setState({ pois: pois, filteredPois: pois })
    }).catch(error => {
      window.alert("Error loading Data from FourSquare API: ", error)
    })
  }

  /* As stated in: https://tomchentw.github.io/react-google-maps/
  * We are also going to need a handler method for clicks on Markers:
  * By passing as center value the lat and lng of the marker the center
  * of our map will switch to be the location of the clicked Marker
  * We also increment a bit the value for zoom, so it will zoom in
  * the marker area
  */

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

      /* The function below will toggle the open class for showing/hiding the
    * list of places and filter functionality by clicking hamburguer menu
    * It will also change the aria-hidden value for true or false
    * by changing filterHidden
    */
    openSearch = () => {
      let searchMenu = document.getElementsByClassName('search-poi')
      searchMenu[0].classList.toggle('open')
      if (this.state.filterHidden === "true") {
      this.setState({filterHidden: "false"})
      } else {
      this.setState({filterHidden: "true"})
      }
    }

  render() {
    return (
      <div className="App">
        <Header openSearch={this.openSearch}></Header>
        <main className="off-canvas canvas-sidebar-show">
            <Search
              pois={this.state.pois}
              filteredPois={this.state.filteredPois}
              query={this.state.query}
              filterByQuery={this.filterByQuery}
              clearQuery={this.clearQuery}
              handleItemClick={this.handleItemClick}
              filterHidden={this.state.filterHidden}
            />
            <a className="off-canvas-overlay" href="#close"></a>    
            <div className="off-canvas-content">
              <MapBox 
              pois={ this.state.filteredPois } 
              handleItemClick={this.handleItemClick}
              poiId={this.state.poiId}
              infoWindowId={this.state.infoWindowId}
              venueDetails={this.state.venueDetails}
            />
            <Footer></Footer>
            </div>

        </main>
      </div>
    );
  }
}

export default App;
