import React, {Component} from 'react';

function DelayedButton (props){
    
    function handleClick(event){
        event.persist()
        setTimeout (() => props.onDelayedClick(event), props.delay)
    }

    return(
        <button onClick={handleClick}></button>
    )
}

export default DelayedButton
