import React from 'react';
import './Football.css';

//function component for displaying data
const Football = props => {
    return (        
        <div id="club"> 
            <div id="name">{props.name}</div>
            <img src={`${props.image}`} alt=""/>
            <div>{props.error ? String(props.error): null}</div>   
        </div>
     );
}

export default Football;