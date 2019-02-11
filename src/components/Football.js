import React from 'react';
import './Football.css';

//function component for displaying data
const Football = props => {
    if (props.error.stack === 'TypeError: Failed to fetch') {
        props.error.stack = 'This API lets only 10 calls per minute. Try again after a moment.';
    } else if(props.error) {
    // if the error is other than too many API calls, then don't show a message 
        props.error.stack = ''
    }
    return (     
        <div>
            {
                (props.name && !props.error.stack) ? (
                <>
                    <div id="name">{props.name}</div>
                    <img src={`${props.image}`} alt=""/>
                </>
            ) : <div>
                    <h3>
                        {props.error.stack ? props.error.stack : null}
                    </h3>
                </div> 
            }             
        </div>    
     );
}

export default Football;