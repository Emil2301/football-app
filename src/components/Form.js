import React from 'react';
import './Form.css'

//function component for drawing the team from German Bundesliga
const Form = props => {
    return (
        <>                            
            <button onClick={props.click}>Draw a team</button>                       
        </>
     );
}

export default Form;