import { useState, useEffect } from 'react'
import VolumeBtn from "../components/buttons/VolumeBtn";
import GamePlay from '../components/GamePlay';
import HomeBtn from '../components/buttons/HomeBtn';
import LevelChoices from '../components/LevelChoices';
import HelpBtn from '../components/buttons/HelpBtn'

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
                        <div className='level-area'>
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