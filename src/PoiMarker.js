import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'

class PoiMarker extends Component {
  state = {
    isOpen: false
  }
// TODO: CONTINUE WORKING IN THIS HANDLER BASED ON react-google-maps.docs
  onToggleOpen = () => {
    this.setState({isOpen: true})
  }

  onToggleClose = () => {
    this.setState({isOpen: false})
  }

  render () {
    return (
      <Marker
        key={this.props.id}
        name={this.props.name}
        position={this.props.latLng}
        address={this.props.address}
        city={this.props.city}
        state={this.props.state}
        country={this.props.country}
        onClick={() => this.onToggleOpen()}
        >
{this.state.isOpen && <InfoWindow onCloseClick={this.props.onToggleOpen}>
          <div className="infoWindow-content">
            <h3>{this.props.name}</h3>
            <p>{this.props.address}</p>
            <p>{this.props.city}</p>
            <p>{this.props.state}</p>
            <p>{this.props.country}</p>
          </div>
          </InfoWindow>}
      </Marker>
    )
  }
}

export default PoiMarker
