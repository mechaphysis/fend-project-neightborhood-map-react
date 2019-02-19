import React, { Component } from 'react';

class Search extends Component {

  /* With this update method we will update the state.query in App.js
   * depending on user input
   */
  updateQuery = (query) => {
  this.props.filterByQuery(query)
  }

  render () {
    let canvasClasses = this.props.hidden ? 
      "off-canvas-sidebar": 
      "off-canvas-sidebar active"  
    
    return (
      <div id="sidebar-id" className={canvasClasses + " nav-custom"}
        aria-hidden={this.props.filterHidden}>
          <div class="form-autocomplete">
            <div class="form-autocomplete-input form-input">
              <input 
                class="form-input" 
                type="text" 
                placeholder="typing here"
                role="search"
                aria-label="search"
                tabIndex="0"
                placeholder="Filter Points Of Interest by name"
                value={this.props.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>

            <ul class="menu menu-custom">
  {this.props.filteredPois.map(poi => (
              <li
              tabIndex="0"
              onClick={(event) => this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id)}
              onKeyPress={(event) => { event.key === 'Enter' && this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id) }}
              key={poi.id}
              className="menu-item padding-custom">
               <a href="#" className="padding-custom">
               <div class="tile tile-centered">
                <div class="tile-icon text-primary">
                  <i class="icon icon-location"/>

                </div>
                <div class="tile-content text-7x">
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
