import React, {Fragment, Component} from 'react'

export class Header extends Component {

    render() {
        return (
            <Fragment>
            <header className="navbar navbar-custom">
                <section className="navbar-section">
                <button className="off-canvas-toggle btn btn-link btn-action ml-2">
                    <i 
                        className="icon icon-menu"
                        tabIndex="0"
                        onClick={this.props.openSearch}
                        onKeyPress={(e) => { e.key === 'Enter' && this.openSearch() }}
                    />
                </button>
                </section>
                <section className="navbar-center">
                </section>
                <section className="navbar-section">
                    <a href="#" className="btn btn-link mr-2">GitHub</a>
                </section>
            </header>
        </Fragment>
        )
    }
}

export default Header
