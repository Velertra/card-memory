import { useState } from "react";
import LevelChoices from "./LevelChoices";

const LogoBtn = () => {   
    const [startTheGame, setStartTheGame] = useState(false);

    function handleClick(level){
        console.log(level)
    }

    return (
        <>
        {startTheGame
         ? <div>yoyoma</div> : 
            <>
                <div>
                    <img
                        className="trolls-logo"
                        src="/public/icons/Trolls_Logo_3.svg"
                        alt="trolls-logo"
                    />
                    <h1 className="game-name">Memory match</h1>
                </div>
                
                
            </>}
        </>
      );
}
 
export default LogoBtn;