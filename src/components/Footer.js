import React, {Fragment} from 'react'

function Footer() {
    return (
        <Fragment>
            <footer className="footer container text-center pt-2">
                    <small className="footer-details text-gray">
                Developed by <a href="https://github.com/mechaphysis">@mechaphysis</a>. 
                Information about the locations is provided by <a href="https://developer.foursquare.com/">FourSquare API</a>.
            </small>
            </footer>
        </Fragment>
    )
}

export default Footer
