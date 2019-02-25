import React, { Component } from 'react';

class Search extends Component {

  /* With this update method we will update the state.query in App.js
   * depending on user input
   */
  updateQuery = (query) => {
  this.props.filterByQuery(query)
  }

  render () {
    let canvasClasses = this.props.filterHidden ? 
      "off-canvas-sidebar": 
      "off-canvas-sidebar active"  
    
    return (
      <div id="sidebar-id" className={canvasClasses + " search-poi nav-custom padding-none"}
        aria-hidden={this.props.filterHidden}>
          <div className="app-brand">
            <h5 className="text-bold text-primary text-uppercase app-title">Local SightSeeing</h5>
            <small className="label label-secondary text-bold">MAP</small>
          </div>
          <div className="form-autocomplete">
            <div className="form-autocomplete-input form-input">
              <input 
                className="form-input text-7x" 
                type="text" 
                role="search"
                aria-label="search"
                tabIndex="0"
                placeholder="Start Typing..."
                value={this.props.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>

            <ul className="menu menu-custom">
  {this.props.filteredPois.map(poi => (
              <li
              tabIndex="0"
              onClick={(event) => this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id)}
              onKeyPress={(event) => { event.key === 'Enter' && this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id) }}
              key={poi.id}
              className="menu-item">
               <a href="#" >
               <div className="tile tile-centered">
                <div className="tile-icon text-primary">
                  <i className="icon icon-location"/>

                </div>
                <div className="tile-content text-7x">
                  {poi.name}
                </div>
              </div>
               
               </a>
              </li>
            ))
          }
          </ul>
          </div>
      </div>
    );
  }
}

export default Search
