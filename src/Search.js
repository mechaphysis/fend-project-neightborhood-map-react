import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import * as DataAPI from './DataAPI'

class Search extends Component {

  /* With this update method we will update the state.query in App.js
   * depending on user input
   */
  updateQuery = (query) => {
  this.props.filterByQuery(query)
  }
  // TODO: FIX LOGIC FOR SHOWING ALL POIS BY DEFAULT
  
  render () {
    return (
      <div className="search-poi">
        <input
          type="text"
          role="search"
          placeholder="Filter Points Of Interest by name"
          value={this.props.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
          {this.props.filteredPois.length !== this.props.pois.length && (
            <div className='showing-pois'>
              <span>Now showing {this.props.filteredPois.length} of {this.props.pois.length} total</span>
            </div>
          )}
          <ol className="poi-list">
            {this.props.filteredPois.map(poi => (
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
