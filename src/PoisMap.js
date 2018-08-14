import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PoiMarker from './PoiMarker.js'

/* We use the docs of react-google-maps as reference for constructing
* this Map Component with children Marker Component
* https://tomchentw.github.io/react-google-maps/
*/

/* TODO: For the moment We hardcode Marker Component
 * for test purposes only. We will pass location array to Marker
 * with arrow function to populate the map with all the markers
 */

 const PoisMap = withGoogleMap((props) =>{

  const markers = props.pois.map( poi => <PoiMarker
                    id={poi.id}
                    name={poi.name}
                    location={{lat: poi.location.lat, lng: poi.location.lng}}
                  />);

   return(
     <GoogleMap
     defaultZoom={11}
     defaultCenter={{ lat: 42.24059889999999, lng: -8.7207268 }}
     handleMarkerClick={props.handleMarkerClick}
     markers={markers}
     >
     </GoogleMap>
   );
 }
)

export default PoisMap
