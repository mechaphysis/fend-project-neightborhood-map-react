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
      <div className="off-canvas canvas-sidebar-show">
      <div id="sidebar-id" className={canvasClasses}
      aria-hidden={this.props.filterHidden}>
      >
        <input
          className="form-input"
          type="text"
          role="search"
          aria-label="search"
          tabIndex="0"
          placeholder="Filter Points Of Interest by name"
          value={this.props.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
          {this.props.filteredPois.length !== this.props.pois.length && (
            <div className=''>
              <span>Now showing {this.props.filteredPois.length} of {this.props.pois.length} total</span>
            </div>
          )}
          <ol className="menu nav-custom"
              tabIndex="-1"
              >
            {this.props.filteredPois.map(poi => (
              <li
              tabIndex="0"
              onClick={(event) => this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id)}
              onKeyPress={(event) => { event.key === 'Enter' && this.props.handleItemClick(event,{lat: poi.location.lat, lng: poi.location.lng}, poi.id) }}
              key={poi.id}
              className="menu-item">
               <a>{poi.name}</a>
              </li>
            ))
          }
          </ol>      
          </div>

      <a className="off-canvas-overlay" href="#close"></a>    
    </div>
    );
  }
}

export default Search
