/* The functionality here is based on BooksAPI from FEND p7: myReads App */
const api= 'https://api.foursquare.com/v2'

// TODO: here we will fetch the POIs (Points of Interest) data using FourSquareAPI

/*The variable below has modificable main parameters that will be passed to FourSquare API url):
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

const requestParameters ='ll=42.24059889999999,-8.7207268&intent=browse&radius=10000&categoryId=4deefb944765f83613cdba6e&client_id=CGXWEC0GDPSBTIX4M52VH4H2DCQNLK3NR2DG5POGO2IVQRAL&client_secret=YPSYJESZMRZSVIOCNFGIHYH5AH0NWWNXVAPSBR1VICEPP3GT&v=20180808'

//We fetch POIs from FourSquare here
// TODO: Add .catch() all along to handle errors when retrieving data
export const fetchPois = () =>
  fetch(`${api}/venues/search?${requestParameters}`)
  .then(results => results.json())
  .then( data => data.response.venues)
