import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <>
            <main className='home-page' id='home-page'>
                <div className="app-container" id="app-container">Memory Game
                    <Link to="memory-game" className="memory-link" id="memory-link">
                        <img src="/images/homeImages/cardmemory.png" className="memory-game-img" id="memory-game-img"></img>
                    </Link>
                </div>
            </main>
        </>
     );
}
 
export default HomePage;