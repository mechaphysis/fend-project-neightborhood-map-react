import React, { Component } from 'react';
import { Marker } from 'react-google-maps'

class PoiMarker extends Component {
  render () {
    return (
      <Marker
        key={this.props.id}
        name={this.props.name}
        position={this.props.location}
        >
      </Marker>
    )
  }
}

export default PoiMarker
