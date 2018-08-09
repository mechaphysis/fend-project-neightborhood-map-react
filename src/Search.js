import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import * as DataAPI from './DataAPI'

class Search extends Component {
  /* We gonna need a query inside our state for updating
   * the filtering results:
   * Most of the logic is reused from previous FEND Project P7
   * https://github.com/mechaphysis/fend-project-myreads-react-app
   * which is itself based on reactnd-contacts code along app:
   * https://github.com/udacity/reactnd-contacts-complete
   */

  state = {
    query : '',
  }
  /* With this update method we will update the state.query
   * depending on user input
   */
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  /* This small method allows us to reset te query to empty string
   * which in turn will show again the full list of pois
   */
  clearQuery = () => {
    this.setState({ query: '' })
  }

  render () {
    const {query}= this.state

    let listPois
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      listPois = this.props.pois.filter((poi) => match.test(this.props.pois.name))
    } else {
      listPois = this.props.pois
    }

    listPois.sort(sortBy('name'))

    return (
      <div className="search-poi">
        <input
          type="text"
          role="search"
          placeholder="Filter Points Of Interest by name"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
          <ol className="poi-list">
            {listPois.map(poi => (
              <li key={poi.id} className="poi-list-item">
               <p>{poi.name}</p>
              </li>
            ))
          }
          </ol>
      </div>
    );
  }
}

export default Search
