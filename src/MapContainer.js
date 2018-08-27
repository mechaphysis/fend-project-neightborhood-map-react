import React, { Component } from 'react';
import PoisMap from './PoisMap.js'


class MapContainer extends Component {
  render () {
    return (
      <PoisMap
        role="application"
        aria-label="Google Map with locations"
        pois={this.props.pois}
        poiId={this.props.poiId}
        handleItemClick={this.props.handleItemClick}
        infoWindowId={this.props.infoWindowId}
        venueDetails={this.props.venueDetails}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSlQ0cytFxsHiEYrKiWpPdyEh8PyUuW40"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MapContainer
