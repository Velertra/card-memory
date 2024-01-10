import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <>
            <main className='home-page' id='home-page'>
                <div className="app-container" id="app-container">Memory Game
                    <Link className="memory-link" id="memory-link" to="memory-game">
                        <img src="/public/images/homeImages/cardmemroyss.png" className="memory-game-img" id="memory-game-img"></img>
                    </Link>
                </div>
            </main>
        </>
     );
}
 
export default HomePage;