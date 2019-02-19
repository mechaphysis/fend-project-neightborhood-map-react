import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import MarkerPin from "./MarkerPin"
import {config} from '../utils/mapboxConfig'

const TOKEN = config.token;
const MAPSTYLE = config.styleURL

const navStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '10px'
};

export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 42.24059889999999,
        longitude: -8.7207268,
        zoom: 10,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: 500,
      }
    };
  }

renderMarker = (poi, index) => {
    return (
      <Marker 
      key={`marker-${index}`} 
      longitude={poi.location.lng} 
      latitude={poi.location.lat}>
        <MarkerPin size={20} onClick={(event) =>
        this.props.handleItemClick(event.poi.location.poi.id)}/>
      </Marker>
    );
}

renderPopup = () => {
  console.log('--> props for renderPopup: ', this.props)
  return (
    this.props.infoWindowId === this.props.poiId && <Popup className="infoWindow" onCloseClick={this.props.onToggleOpen}>
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
    </Popup>
  )
}
render() {
    const {viewport} = this.state;
  console.log('---> print props: ', this.props)
return (
      <MapGL
        {...viewport}
        mapStyle={MAPSTYLE}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
        >
          {this.props.pois.map(this.renderMarker)}
          {this.renderPopup()}
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}