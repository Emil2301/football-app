import React from 'react';
import './NextMatch.css'

const NextMatch = props => {
    const date = new Date(props.date).toLocaleString();
    return ( 
        <div>
            {
                (props.value && !props.error) ? (
                <div className="match">
                    <div>Next game:</div>
                    <div>{props.homeTeam} vs. {props.awayTeam}</div>
                    <div>Date: {date}</div>
                </div>
            ) : <div>
                    <h3>
                        {props.error ? String(props.error)+ ', because this API lets only 10 calls per minute ' : null}
                    </h3>
                </div> 
            }             
        </div>        
     );
}
 
export default NextMatch;