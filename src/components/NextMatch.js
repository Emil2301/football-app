import React from 'react';
import './NextMatch.css'

const NextMatch = props => {
    // converting data to from utc to our system
    const date = new Date(props.date).toLocaleString();
    // checking if the error is caused with too many API calls
    if (props.error.stack === 'TypeError: Failed to fetch') {
        props.error.stack = 'This API lets only 10 calls per minute. Try again after a moment.';
    } else if(props.error) {
    // if the error is other than too many API calls, then don't show a message 
        props.error.stack = ''
    }
    return ( 
        <div>
            {
                (props.value && !props.error.stack) ? (
                <div>
                    <div>Next game:</div>
                    <div>{props.homeTeam} vs. {props.awayTeam}</div>
                    <div>Date: {date}</div>
                </div>
            ) : (
                <div>
                    <h3>
                        {props.error.stack ? (props.error.stack) : null}
                    </h3>
                </div> 
                )
            }             
        </div>        
     );
}
 
export default NextMatch;