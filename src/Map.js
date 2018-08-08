import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps'

class Map extends Component {
   render() {
   const GoogleMapInstance = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 42.24059889999999, lng: -8.7207268 } }
        defaultZoom = { 13 }
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
