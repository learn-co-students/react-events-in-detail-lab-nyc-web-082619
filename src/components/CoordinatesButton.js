import React, {Component} from 'react';

function CoordinatesButton (props){

    function handleClick(event){
        let array = [event.clientX, event.clientY]
        return props.onReceiveCoordinates(array)
    }

    return (
        <button onClick={handleClick}></button>
    )
}

export default CoordinatesButton 