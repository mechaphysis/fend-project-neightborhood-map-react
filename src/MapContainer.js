import React, { Component } from 'react';
import PoisMap from './PoisMap.js'


class MapContainer extends Component {
  render () {
    return (
      <PoisMap
        pois={this.props.pois}
        poiId={this.props.poiId}
        handleItemClick={this.props.handleItemClick}
        infoWindowId={this.props.infoWindowId}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MapContainer
