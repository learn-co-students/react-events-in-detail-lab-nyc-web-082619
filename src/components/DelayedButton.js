// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {

    btnClicked = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay); 
    }
    render(){
        return(
            <button onClick={(e)=>this.btnClicked(e)}>DelayedButton</button>
        )
    }
}
export default DelayedButton;




