import React from 'react';
import './Football.css';

//function component for displaying data
const Football = props => {
    return (     
        <div>
            {
                (props.name && !props.error) ? (
                <>
                    <div id="name">{props.name}</div>
                    <img src={`${props.image}`} alt=""/>
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

export default Football;