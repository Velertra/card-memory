import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardImages from './CardImages';
import ArrayDisplay from './ArrayDisplay';
import LevelChoices from './LevelChoices';
import FirstOne from '../tests/sandbox';


const GamePlay = ({ gameLevel }) => {
    const [levelNumber, setLevelNumber] = useState('')
    const [levelArr, setLevelArr] = useState([]);
    const characterImages = [
        'characters/branchtroll.png',
        'characters/guy-diamond-trolls.jpg',
        'characters/troll-hero.png',
        'characters/trollspoppy2.png'
    ]

    if(gameLevel === 'easy'){
        setLevelNumber(() => 4);
    } else if(gameLevel === 'med'){
        setLevelNumber(() => 8);
    } else {
        setLevelNumber(() => 16);
    }

    //vxcvxccvxxxxx
    let imageUpThere = [];

    FirstOne(characterImages, 4)

    useEffect(() => {
        //FirstOne(characterImages, 4)
/* 
    imageUpThere = [];
        
        setLevelArr(() => [])
        //creates array, then uses amount to display equal amount of cards
    //let number = 0;

    if(gameLevel === 'easy'){
        setLevelNumber(() => 4);
    } else if(gameLevel === 'med'){
        setLevelNumber(() => 8);
    } else {
        setLevelNumber(() => 16);
    }

    for(let x = 0; x < (levelNumber); x++){

        
        const ranNum = Math.floor(Math.random() * characterImages.length)
        const ranImage = characterImages[ranNum];
        console.log()
        if((imageUpThere[0] && imageUpThere[2])!== ranImage){

            imageUpThere.push(characterImages[ranNum])
        }
            //imageUpThere.push(characterImages[ranNum])
            //console.log(imageUpThere)
            //setLevelArr(...x)
            //levelArr.push(x)
            //console.log(levelArr)
    }
    setLevelArr(() => imageUpThere)
 */

    }, []);

    const cardStyles = {
        width: '20vh',
    }

    return ( 
        <>
            {levelArr.map((image, index) =>
                 <div key={index}>
                  {/*  <CardImages
                        name={`card_${index}`}
                        styles={cardStyles}
                        levelChoice={`card_${index}`}
                    /> */}
                    <img style={cardStyles} src={image}/>
                    {/* <ArrayDisplay /> */}
                </div>)}
               
            
        </>
     );
}
 
export default GamePlay;

/* GamePlay.propTypes = {
    check: PropTypes.string.isRequired
} */