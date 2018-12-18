import React, {Component} from 'react';
import MapGL, {Marker, NavigationControl} from 'react-map-gl';

import {config} from '../utils/mapboxConfig'

const TOKEN = config.token;
const MAPSTYLE = config.styleURL

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
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
render() {
    const {viewport} = this.state;
    console.log('-> props: ', this.props)
    const markers = this.props.pois.map( poi => <Marker
    key={poi.id}
    longitude={poi.location.lng}
    latitude={poi.location.lat}
    >
    <div>Test</div>
    </Marker>)
return (
      <MapGL
        {...viewport}
        mapStyle={MAPSTYLE}
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
          {markers}
        </div>
      </MapGL>
    );
  }
}