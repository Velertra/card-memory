import { useState, useEffect } from 'react'
import HelpBtn from "../buttons/HelpBtn";
import VolumeBtn from "../buttons/VolumeBtn";
import GamePlay from '../GamePlay';
import HomeBtn from '../buttons/HomeBtn';
import LevelChoices from '../LevelChoices';

const LandingPage = () => {
    const [startGame, setStartGame] = useState(false);
    const [gameLevel, setGameLevel] = useState('');

    function stopGame(){
        setStartGame(false);
    }

    function pickLevel(test){
             setGameLevel(test);
             setStartGame(true)
            
    }

    return (
        <>  
            <div className="game-container">
                {!startGame ?
                    <>
                        <HomeBtn
                            isAButton={false}
                            stopGame={null}
                        />
                        <div className='play-area'>
                            <LevelChoices
                                pickLevel={pickLevel}
                            />
                        </div>
                    </>
                    :
                    <>
                        <HomeBtn
                            isAButton={true}
                            stopGame={stopGame}
                        />
                        <div className='play-area'>
                            <GamePlay
                                gameLevel={gameLevel}
                            />
                        </div>
                    </> 
                    }
                </div>
            <div className="menu-container">
                <HelpBtn />  
                <VolumeBtn />    
            </div>
        </>
      );
}
 
export default LandingPage;