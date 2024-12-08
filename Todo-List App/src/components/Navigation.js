import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='navMenu'>

            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li><a>accueil</a></li>
            </NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li><a>à propos</a></li>
            </NavLink>


        </div>
    );
};

export default Navigation;