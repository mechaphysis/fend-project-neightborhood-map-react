import React from 'react'

const MarkerPin = (props) => {

    const {onClick} = props;
    
    return (
        <i 
          className="icon icon-location text-primary"
          onClick={onClick} 
          />
    );
}

export default MarkerPin
