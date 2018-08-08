import React, { Component } from 'react';

// TODO: here we will fetch the POIs (locations) data using FourSquareAPI

/*The url below has as modificable main parameters (the ones starting with '&'):
 * https://api.foursquare.com/v2/venues/search?
 * ll=42.24059889999999,-8.7207268
 * &intent=browse
 * &radius=10000
 * &categoryId=4deefb944765f83613cdba6e
 * &client_id=CGXWEC0GDPSBTIX4M52VH4H2DCQNLK3NR2DG5POGO2IVQRAL
 * &client_secret=YPSYJESZMRZSVIOCNFGIHYH5AH0NWWNXVAPSBR1VICEPP3GT
 *  &v=20180808
 *
 * You can check an explanation of each parameter in FourSquare API docs:
 * https://developer.foursquare.com/docs/api/venues/search
 */

const dataRequest ='https://api.foursquare.com/v2/venues/search?ll=42.24059889999999,-8.7207268&intent=browse&radius=10000&categoryId=4deefb944765f83613cdba6e&client_id=CGXWEC0GDPSBTIX4M52VH4H2DCQNLK3NR2DG5POGO2IVQRAL&client_secret=YPSYJESZMRZSVIOCNFGIHYH5AH0NWWNXVAPSBR1VICEPP3GT&v=20180808'

class DataAPI extends Component {
  state = {
    locations: [],
  }
//We fetch locations from FourSquare inside componentDidMount for async behaviour
// TODO: Add .catch() all along to handle errors when retrieving data
  componentDidMount() {
    fetch(dataRequest)
    .then(results => results.json())
    .then( data => {
      let locations = data.response.venues.map( (location) => {
        return(
          <div key={location.id}>
           <p>{location.name}</p>
          </div>
        )
      })
      this.setState({locations: locations})
      console.log("state", this.state.locations)
    })
  }

  render () {

    return (
      <div className="container2">
        <div className="container1">
        {this.state.locations}
        </div>
      </div>

    )
  }
}

export default DataAPI;
