import { useState, useEffect } from 'react'
import HelpBtn from "./HelpBtn";
import Levels from "./LevelChoices"
import Logo from './StartGame'
import VolumeBtn from "./VolumeBtn";
import GamePlay from './GamePlay';

const LandingPage = () => {
    const [startGame, setStartGame] = useState(false);
    const [gameChoice, setGameChoice] = useState('');

    function handleClick(e) {
        setGameChoice(e.target.textContent);
        console.log(gameChoice)
    }

    function handleHelpBtn(){
        console.log('yoyoma')
    }

    return (
        <>  
            <div className="game-container">
                {!startGame
                    ? 
                    <GamePlay 
                        check={gameChoice}
                    />
                    :
                    <>
                        <Logo />
                        <Levels />
                    </>}
            </div>
            <div className="menu-container">
                <HelpBtn
                    onClick={() => console.log('check')}
                    handleHelpBtn={handleHelpBtn}
                />  
                <VolumeBtn />    
            </div>
        </>
      );
}
 
export default LandingPage;