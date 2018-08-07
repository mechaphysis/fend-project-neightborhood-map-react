import React, { Component } from 'react';

class Search extends Component {
  render () {
    return (
      <div className="search-poi">
        <input type="text" role="search" placeholder="Filter points of interest by name"/>
        <div className="search-poi-results">
          <ol className="poi-list"></ol>
            <li>This is a test element</li>
        </div>
      </div>
    );
  }
}

export default Search
