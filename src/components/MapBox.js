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
        <MarkerPin size={20} />
      </Marker>
    );
}
render() {
    const {viewport} = this.state;

return (
      <MapGL
        {...viewport}
        mapStyle={MAPSTYLE}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
        >
          {this.props.pois.map(this.renderMarker)}
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}