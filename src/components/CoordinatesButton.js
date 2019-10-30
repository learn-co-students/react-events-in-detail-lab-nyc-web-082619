import React, { Component } from 'react'

class CoordinatesButton extends React.Component {

    render(){
        return(
            <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>
                Coordinates
            </button>
        )
    }
}

export default CoordinatesButton