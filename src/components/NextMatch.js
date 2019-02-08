import React from 'react';

const NextMatch = props => {
    const date = new Date(props.date).toLocaleString();
    return ( 
        <div>
            {props.value ? (
                <>
                    <h3>Next game:</h3>
                    <h4>{props.homeTeam} vs. {props.awayTeam}</h4>
                    <h4>Date: {date}</h4>
                </>
            ) : ''}
        </div>
        // <div>
        //     <h3>Next game:</h3>
        //     <h4>{props.homeTeam} vs. {props.awayTeam}</h4>
        //     <h4>Date: {props.date}</h4>
        // </div>
     );
}
 
export default NextMatch;