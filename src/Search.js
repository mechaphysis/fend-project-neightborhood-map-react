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
          <div className="form-autocomplete">
            <div className="form-autocomplete-input form-input">
              <input 
                className="form-input" 
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
