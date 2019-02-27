import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import MarkerPin from "./MarkerPin"
import InfoContent from "./InfoContent"
import {config} from '../utils/mapboxConfig'

const TOKEN = config.token;
const MAPSTYLE = config.styleURL

const navStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '100px 10px'
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
        pitch: 0
      },
      poiInfo: null
    };
  }

  updateViewport = viewport => {
    this.setState({viewport});
  };

  renderMarker = (poi, index) => {
    return (
      <Marker
      key={`marker-${index}`} 
      longitude={poi.location.lng} 
      latitude={poi.location.lat}>
        <MarkerPin size={20} onClick={(event) => {
          this.props.handleItemClick(event, poi.id)
          this.setState({poiInfo: poi})
        }
        }/>
      </Marker>
    );
}

  renderPopup() {
    console.log('---> print poiInfo; ', this.state.poiInfo)
    console.log('---> infoWindowID: ', this.props.infoWindowId)
  return (
    this.props.infoWindowId === this.props.poiId && <Popup
        tipSize={5}
        anchor="top"
        longitude={this.state.poiInfo.location.lng}
        latitude={this.state.poiInfo.location.lat}
        closeOnClick={false}
        onClose={this.props.onToggleOpen}
      >
        <InfoContent 
          name={this.state.poiInfo.name}
          address={this.state.poiInfo.address}
          city={this.state.poiInfo.city}
          state={this.state.poiInfo.state}
          country={this.state.poiInfo.country}
          venueDetails={this.props.venueDetails}
        ></InfoContent>
      </Popup>
  );
}

render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        onViewportChange={this.updateViewport}
        width="100%"
        height="637px"
        mapStyle={MAPSTYLE}
        mapboxApiAccessToken={TOKEN}
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