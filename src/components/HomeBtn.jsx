import { useState } from 'react';


const HomeBtn = ({ isAButton, stopGame }) => {
    
   function handleClick(){
        if (isAButton){
            stopGame()
        }
    }

    const styleVar = {
        main: { 
            width:450,
        }
    }

    return ( 
        <div
            style={!isAButton ? null : styleVar.main}
            className="home-container"
            onClick={() => handleClick()}
        >
            <img
                /* style={styleVar.main} */
                className="trolls-logo"
                src="/icons/Trolls_Logo_3.svg"
                alt="trolls-logo"
            />
                <p className="game-name">Memory match</p>
        </div>
     );
}
 
export default HomeBtn;