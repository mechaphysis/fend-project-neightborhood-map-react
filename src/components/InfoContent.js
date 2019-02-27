import React from 'react'

function InfoContent(props) {
        let {name, address, city, state, country, venueDetails} = props
        console.log('---> print props: ', props)
    return (
        venueDetails !== undefined &&
        <div className="container">
                    <div className="card">
            <div className="card-header">
                <div className="card-title h5">{name}</div>
                <div className="card-subtitle text-gray">{address}</div>
            </div>
            <div className="card-body">
                ...
            </div>
            <div className="card-image">
                    {(venueDetails !== undefined && venueDetails.bestPhoto) &&
            <img width={200} height={150} className="img-responsive"
                alt={'A picture of '+name}
                src={venueDetails.bestPhoto.prefix+
                        venueDetails.bestPhoto.width+
                        'x'+
                        venueDetails.bestPhoto.height+
                    venueDetails.bestPhoto.suffix} />
            }
            </div>
        </div>
        </div>
    )
}

export default InfoContent
