import React, { Component } from 'react';
import Poi from './Poi.js'

class Search extends Component {
  render () {
    return (
      <div className="search-poi">
        <input type="text" role="search" placeholder="Filter points of interest by name"/>
        <div className="search-poi-results">
          <ol className="poi-list">
            {this.props.pois
            .map(poi => (
              <li>
              <Poi
                poi={poi}
              />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search
