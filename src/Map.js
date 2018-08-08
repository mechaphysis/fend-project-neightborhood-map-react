import React, { Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';

const apiKey = {
  key: 'AIzaSyCSlQ0cytFxsHiEYrKiWpPdyEh8PyUuW40',
}

const mapOptions = {
  center: {lat:42.1756174, lng:-8.506475699999999},
  zoom: 13
}
// TODO: FIX THIS STYLE TO FIT INTO App.css
const mapStyle = {
  height: '450px',
  width: '100%',
  margin: '0',
  padding: '0'
}

class Map extends Component {
  componentDidMount() {
  //We use loadGoogleMapsAPI inside ComponentDidMount with promises to load it
  //asynchronously. This async behaviour would have been done "vanilla way"
  //by adding async defer to <script> tag.
  loadGoogleMapsAPI( apiKey ).then( googleMaps => {
    new googleMaps.Map( this.refs.map, mapOptions );
  }).catch( error => {
    console.log( 'Woops! Something went wrong while loading the map', error );
  });
}
  render () {
    return (
      <div className="map">
        <div ref="map" style={mapStyle}></div>
      </div>
    );
  }
}
export default Map
