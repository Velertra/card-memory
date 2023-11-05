import {useState} from 'react';
import PropTypes from 'prop-types';
import CardImages from './CardImages';


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
        width: '30vh',
    }

    return ( 
        <>
            {levelArr.map((index) =>
                        <div key={index}>
                            <CardImages
                                name={`card_${index}`}
                                styles={cardStyles}
                                levelChoice={`card_${index}`}

                    /></div>)}
               
            
        </>
     );
}
 
export default GamePlay;

/* GamePlay.propTypes = {
    check: PropTypes.string.isRequired
} */