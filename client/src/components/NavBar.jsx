import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [navWidth, setNavWidth] = useState(0);

    const openNav = () => {
        setNavWidth('30%');
    };

    const closeNav = () => {
        setNavWidth(0);
    };

    return ( 
        <div className='nav-btn' id='nav-btn'>
            <div className="side-nav" id="side-nav-1" style={{width: `${navWidth}`}}>
                <a href="#" className="close-nav-btn" onClick={closeNav}>&times;</a>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/memory-game">Memory Game</Link>
                </nav>
            </div>

            <button className='open-nav-btn' onClick={openNav}>&#9776;</button>
        </div>
     );
};
 
export default NavBar;