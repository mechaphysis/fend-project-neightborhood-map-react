import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps'

class Map extends Component {
   render() {
   const GoogleMapInstance = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = {this.props.zoom}
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapInstance
          containerElement={ <div style={{ height: `500px`, width: `100%` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
}
export default Map
