import React from 'react';

const NextMatch = props => {
    const date = new Date(props.date).toLocaleString();
    return ( 
        <div>
            {
                (props.value && !props.error) ? (
                <>
                    <h3>Next game:</h3>
                    <h4>{props.homeTeam} vs. {props.awayTeam}</h4>
                    <h4>Date: {date}</h4>
                </>
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