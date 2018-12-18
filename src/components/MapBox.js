import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';

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
        zoom: 13,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: 500,
      }
    };
  }
render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        mapStyle={MAPSTYLE}
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}