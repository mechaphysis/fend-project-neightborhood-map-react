import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import PoiMarker from './PoiMarker.js'

/* We use the docs of react-google-maps as reference for constructing
* this Map Component with children Marker Component
* https://tomchentw.github.io/react-google-maps/
* However, for markers implementation react-google-maps gets a bit tricky
* because it makes use of HOC "compose". For understanding how to work with
* react-google-maps just using the modularity and components we are used to work with
* it was very useful to check this walk-trough:
* https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad
*/

  // TODO: FIX LOGIC FOR SHOWING ALL POIS BY DEFAULT

 const PoisMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.pois.map( poi => <PoiMarker
                    key={poi.id}
                    name={poi.name}
                    latLng={{lat: poi.location.lat, lng: poi.location.lng}}
                    address={poi.location.address}
                    city={poi.location.city}
                    state={poi.location.state}
                    country={poi.location.country}
                    poiId={poi.id}
                    handleItemClick={props.handleItemClick}
                    infoWindowId={props.infoWindowId}
                    venueDetails={props.venueDetails}
                  />);

   return(
     <GoogleMap
     defaultZoom={11}
     defaultCenter={{ lat: 42.24059889999999, lng: -8.7207268 }}
     >
     {markers}
     </GoogleMap>
   );
 }
))

export default PoisMap
