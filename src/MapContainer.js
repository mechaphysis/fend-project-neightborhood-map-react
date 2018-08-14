import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PoisMap from './PoisMap.js'


class MapContainer extends Component {
  render () {
    return (
      <PoisMap
        pois={this.props.pois}
        handleMarkerClick={this.props.handleMarkerClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MapContainer
