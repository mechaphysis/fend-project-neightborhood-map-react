import React, { Component } from 'react';

class Search extends Component {

  /* With this update method we will update the state.query in App.js
   * depending on user input
   */
  updateQuery = (query) => {
  this.props.filterByQuery(query)
  }

  render () {
    return (
      <div className="search-poi"
          aria-hidden={this.props.filterHidden}>
        <input
          type="text"
          role="search"
          aria-label="search"
          tabIndex="0"
          placeholder="Filter Points Of Interest by name"
          value={this.props.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
          {this.props.filteredPois.length !== this.props.pois.length && (
            <div className='showing-pois'>
              <span>Now showing {this.props.filteredPois.length} of {this.props.pois.length} total</span>
            </div>
          )}
          <ol className="poi-list"
              tabIndex="-1"
              role="list"
              >
            {this.props.filteredPois.map(poi => (
              <li
              tabIndex="0"
              role="listitem"
              onClick={(event) => this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.name)}
              onKeyPress={(event) => { event.key === 'Enter' && this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id) }}
              key={poi.id}
              className="poi-list-item">
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
