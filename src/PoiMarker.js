import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
/*global google*/

class PoiMarker extends Component {

  state = {
    isOpen: false,
  }

  /* The toggling method below is replaced now by handleItemClick method that comes from
   * parent App.js, this way we can also pass the method to the other child (Search.js)
   * so that same behaviour happens either clickling on a marker or clicking on an item in
   * Search List
   */
  onToggleOpen = () => {
      this.setState({isOpen: true})
    }

  onToggleClose = () => {
    this.setState({isOpen: false})
  }


  render () {
    return (
      <Marker
        key={this.props.poiId}
        name={this.props.name}
        position={this.props.latLng}
        address={this.props.address}
        city={this.props.city}
        state={this.props.state}
        country={this.props.country}
        venueDetails={this.props.venueDetails}
        animation={this.props.infoWindowId=== this.props.name && google.maps.Animation.BOUNCE }
        onClick={(event) =>
        this.props.handleItemClick(event,this.props.latLng,this.props.poiId)}
        >
{this.props.infoWindowId === this.props.poiId && <InfoWindow className="infoWindow" onCloseClick={this.props.onToggleOpen}>
          <div className="infoWindow-content">
            <h3>{this.props.name}</h3>
            <p>{this.props.address}</p>
            <p>{this.props.city} {this.props.state} {this.props.country}</p>
            {(this.props.venueDetails !== undefined && this.props.venueDetails.bestPhoto) &&
            <img className="poi-img"
                 alt={'A picture of '+this.props.name}
                 src={this.props.venueDetails.bestPhoto.prefix+
                      this.props.venueDetails.bestPhoto.width+
                      'x'+
                      this.props.venueDetails.bestPhoto.height+
                    this.props.venueDetails.bestPhoto.suffix} />
            }
          </div>
          </InfoWindow>}
      </Marker>
    )
  }
}

            // <p>{this.props.tips.groups.items.text}</p>
export default PoiMarker