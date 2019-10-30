// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
    render(){
        console.log(this.props.onReceiveCoordinates);
        return(
            <button onClick={(e)=>this.props.onReceiveCoordinates([e.clientX,e.clientY])}>Click me</button>
        )
    }
}
export default CoordinatesButton
