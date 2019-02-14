import React, {Fragment} from 'react'
import hamburguer from './hamburguer-icon.svg'

function Header() {
    return (
        <Fragment>
            <header className="App-header">
                <img
                tabIndex="0"
                onClick={this.openSearch}
                onKeyPress={(e) => { e.key === 'Enter' && this.openSearch() }}
                src={hamburguer} className="App-logo" alt="logo" />
                <h1 className="App-title">Local Sightseeing Map</h1>
        </header>
        </Fragment>
    )
}

export default Header
