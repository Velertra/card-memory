import { useState, useEffect } from 'react'
import VolumeBtn from "../components/buttons/VolumeBtn";
import GamePlay from '../components/GamePlay';
import HomeBtn from '../components/buttons/HomeBtn';
import LevelChoices from '../components/LevelChoices';
import HelpBtn from '../components/buttons/HelpBtn'
import LoadingImage from '../utilities/LoadingImage';
import NavBar from '../components/NavBar';

const LandingPage = () => {
    const [startGame, setStartGame] = useState(false);
    const [gameLevel, setGameLevel] = useState('');
    const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true)
    }, 2200)
    setLoadingPage(false)
  }, [])

    function stopGame(){
        setStartGame(false);
    }

    function pickLevel(test){
             setGameLevel(test);
             setStartGame(true)
             setTimeout(() => {
                setLoadingPage(true)
              }, 2200)
              setLoadingPage(false)
             
    }

    return (
        <>
            {/* <NavBar  /> */}
            <main className='memory-game' id='memory-game'>
                {/* {loadingPage ? <> */}<div className="game-container">
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
                            {/* {loadingPage ?  */}<div className='play-area'>
                                <GamePlay
                                    gameLevel={gameLevel}
                                />
                            </div>{/*  : <LoadingImage />} */}
                        </> 
                        }
                    </div>
                <div className="menu-container">
                    <HelpBtn />  
                    <VolumeBtn />    
                </div>{/* </>  : <LoadingImage />} */}
                
            </main>
        </>
      );
}
 
export default LandingPage;