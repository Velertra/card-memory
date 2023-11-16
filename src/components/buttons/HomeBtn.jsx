import { useState } from 'react';

const HomeBtn = ({ isAButton, stopGame }) => {
    
   function handleClick(){
        if (isAButton){
            stopGame()
        }
    }

    const styleVar = {
        main: { 
            width:'30vh',
        }
    }

    return ( 
        <div
            
            className="home-container"
        >
            <img
                style={!isAButton ? null : styleVar.main}
                onClick={() => handleClick()}
                className="trolls-logo"
                src="/icons/trolls-logo.svg"
                alt="trolls-logo"
            />
        </div>
     );
}
 
export default HomeBtn;