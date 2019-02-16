import React, {Fragment, Component} from 'react'
import hamburguer from '../hamburguer-icon.svg'

export class Header extends Component {

    render() {
        return (
            <Fragment>
            <header className="navbar navbar-custom">
                <section className="navbar-section">
                <a className="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
                    <i 
                        className="icon icon-menu"
                        tabIndex="0"
                        onClick={this.props.openSearch}
                        onKeyPress={(e) => { e.key === 'Enter' && this.openSearch() }}
                    />
                </a>
                </section>
                <section className="navbar-center">
                    <p href="..." className="navbar-brand text-bold mr-2">Local Sightseeing Map</p>
                </section>
                <section className="navbar-section">
                    <a href="#" className="btn btn-link">GitHub</a>
                </section>
            </header>
        </Fragment>
        )
    }
}

export default Header
