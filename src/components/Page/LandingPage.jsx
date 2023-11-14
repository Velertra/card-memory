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

    function styleChange(){
        console.log(gameLevel)
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
                        <div style={{paddingTop: '10vh'}} className='play-area'>
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
                        <div style={{ paddingTop: gameLevel !== 'hard' ? '10vh' : '' }} className='play-area'>
                            <GamePlay
                                gameLevel={gameLevel}
                                styleChange={styleChange}
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