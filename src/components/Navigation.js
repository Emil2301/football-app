import React from 'react';
import './Navigation.css'
import {NavLink} from 'react-router-dom'


const Navigation = () => {
    return ( 
        <div>
            <button>
                <NavLink exact to="/" activeClassName="selected" className="link">Display Logo</NavLink>
            </button>
            <button>
                <NavLink to="/when" activeClassName="selected" className="link">When He Plays</NavLink>
            </button>
            
        </div>
     );
}
 
export default Navigation;