import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

/* We use the docs of react-google-maps as reference for constructing
* this Map Component with children Marker Component
* https://tomchentw.github.io/react-google-maps/
*/

/* TODO: For the moment We hardcode Marker Component
 * for test purposes only. We will pass location array to Marker
 * with arrow function to populate the map with all the markers
 */
 const MapInstance = withGoogleMap((props) =>
<GoogleMap
defaultZoom={11}
defaultCenter={{ lat: 42.24059889999999, lng: -8.7207268 }}
handleMarkerClick={props.handleMarkerClick}
>
{props.isMarkerShown && <Marker
  position={
    { lat:42.28756414541176, lng: -8.660552501678467 }}
  onClick={props.handleMarkerClick}
    />}
</GoogleMap>
)

class Map extends Component {
   render() {


   return(
     <MapInstance
       isMarkerShown
       googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
       loadingElement={<div style={{ height: `100%` }} />}
       containerElement={<div style={{ height: `500px` }} />}
       mapElement={<div style={{ height: `100%` }} />}
       handleMarkerClick={this.props.handleMarkerClick}
     />
   );
 }
}

export default Map
