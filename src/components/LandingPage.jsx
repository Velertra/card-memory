import { useState, useEffect } from 'react'
import HelpBtn from "./HelpBtn";
import VolumeBtn from "./VolumeBtn";
//import GamePlay from './GamePlay';
import HomeBtn from './HomeBtn';
import LevelChoices from './LevelChoices';
import TrialGamePlay from '../tests/TrialGamePlay';

const LandingPage = () => {
    const [startGame, setStartGame] = useState(false);
    const [gameLevel, setGameLevel] = useState('');

    function stopGame(){
        setStartGame(false);
    }

    function pickLevel(test){
             setGameLevel(test);
             setStartGame(true)
             //console.log(test)
            
    }

    return (
        <>  
            <div className="game-container">
                {startGame ?
                    <>
                        <HomeBtn
                            isAButton={true}
                            stopGame={stopGame}
                        />
                        <div className='play-area'>
                            <TrialGamePlay
                                gameLevel={gameLevel}
                            />
                        </div>
                    </> 
                    :
                    <>
                        <HomeBtn
                            isAButton={false}
                            stopGame={null}
                         />
                        <div className='level-choices'>
                            <LevelChoices
                                pickLevel={pickLevel}
                            />
                        </div>
                    </>}
                </div>
            <div className="menu-container">
                <HelpBtn />  
                <VolumeBtn />    
            </div>
        </>
      );
}
 
export default LandingPage;