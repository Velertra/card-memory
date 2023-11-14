import { useState } from 'react';


const HomeBtn = ({ isAButton, stopGame }) => {
    
   function handleClick(){
        if (isAButton){
            stopGame()
        }
    }

    const styleVar = {
        main: { 
            width:500,
        }
    }

    return ( 
        <div
            style={!isAButton ? null : styleVar.main}
            className="home-container"
            onClick={() => handleClick()}
        >
            <img
                
                className="trolls-logo"
                src="/icons/trolls-logo.svg"
                alt="trolls-logo"
            />
        </div>
     );
}
 
export default HomeBtn;