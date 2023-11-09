import {useState} from 'react';
import PropTypes from 'prop-types';
import CardImages from './CardImages';
import ArrayDisplay from './ArrayDisplay';


const GamePlay = ({ gameLevel }) => {
    
    //creates array, then uses amount to display equal amount of cards
    let number = 0;

    if(gameLevel === 'easy'){
        number = 4;
    } else if(gameLevel === 'med'){
        number = 8;
    } else {
        number = 16;
    }

    const levelArr = [];

    for(let x = 0; x < number; x++){
        levelArr.push( x);
    }

    const cardStyles = {
        width: '20vh',
    }
    //all for card images

    const characterImages = [
        'characters/branchtroll.png',
        'characters/guy-diamond-trolls.jpg',
        'characters/troll-hero.png',
        'characters/trollspoppy2.png'
    ]
    function runthiscode() {
        
        const ranNumber = Math.floor(Math.random() * number );
      
       
        return characterImages[ranNumber]
    }


    return ( 
        <>
            {levelArr.map((index) =>
                <div key={index}>
                    <CardImages
                        name={`card_${index}`}
                        styles={cardStyles}
                        levelChoice={`card_${index}`}

                /><ArrayDisplay />
                </div>)}
               
            
        </>
     );
}
 
export default GamePlay;

/* GamePlay.propTypes = {
    check: PropTypes.string.isRequired
} */