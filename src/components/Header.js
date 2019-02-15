import React, {Fragment, Component} from 'react'
import hamburguer from '../hamburguer-icon.svg'

export class Header extends Component {

    /* The function below will toggle the open class for showing/hiding the
    * list of places and filter functionality by clicking hamburguer menu
    * It will also change the aria-hidden value for true or false
    * by changing filterHidden
    */
    openSearch = () => {
        let searchMenu = document.getElementsByClassName('search-poi')
        searchMenu[0].classList.toggle('open')
        if (this.state.filterHidden === "true") {
        this.setState({filterHidden: "false"})
        } else {
        this.setState({filterHidden: "true"})
        }
    }

    render() {
        return (
            <Fragment>
            <header class="navbar navbar-custom">
                <section class="navbar-section">
                <a class="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
                    <i 
                        class="icon icon-menu"
                        tabIndex="0"
                        onClick={this.openSearch}
                        onKeyPress={(e) => { e.key === 'Enter' && this.openSearch() }}
                    />
                </a>
                </section>
                <section class="navbar-center">
                    <p href="..." class="navbar-brand text-bold mr-2">Local Sightseeing Map</p>
                </section>
                <section class="navbar-section">
                    <a href="#" class="btn btn-link">GitHub</a>
                </section>
            </header>
        </Fragment>
        )
    }
}

export default Header
