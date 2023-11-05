import { useState, useEffect } from 'react'
import HelpBtn from "./HelpBtn";
import VolumeBtn from "./VolumeBtn";
import GamePlay from './GamePlay';
import HomeBtn from './HomeBtn';
import LevelChoices from './LevelChoices';

const LandingPage = () => {
    const [startGame, setStartGame] = useState(false);
    const [gameLevel, setGameLevel] = useState('');

    useEffect(() => {
        /* console.log('test')
        console.log(gameLevel.length) */
    },[gameLevel])

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
                        <div className='level-choices'>
                            <GamePlay
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