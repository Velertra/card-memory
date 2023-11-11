const arr = [0, 1, 2, /* 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16 */];
const secondary = [];
const numberOfCards = 3
const randomNumbers = [];

//pushs two random numbers to an Array
function firstOne(){
    console.log(arr)
    for(let x = 0; randomNumbers.length < numberOfCards; x++){
        console.log(x);
        const number = Math.floor(Math.random() * arr.length)
        if(randomNumbers === undefined){ 
            randomNumbers.push(number)
        } else if(!randomNumbers.includes(number)){
            randomNumbers.push(number)
        }else{
            console.error(Error, "not enough cards")
        }
    }
    console.log(randomNumbers)
    otherFunction(randomNumbers)

}

firstOne()

function otherFunction(array){
    const newArr = [...array, ...array];
    console.log(newArr)
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      console.log(newArr)
}






























































//import {fetch} from 'node-fetch';

/* const result =
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=EPHdw7WFvcqzXLwX6bqAM1RNjhXYEorU&s=cats', {
        'apikey': "EPHdw7WFvcqzXLwX6bqAM1RNjhXYEorU" 
    })
        .then(response => response.json())
        .then(response => response.data.images.original.url)

        result */













        /* import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardImages from './CardImages';
import ArrayDisplay from './ArrayDisplay';


const GamePlay = ({ gameLevel }) => {
    //const [levelArr, setLevelArr] = useState([]);
    const characterImages = [
        'characters/branchtroll.png',
        'characters/guy-diamond-trolls.jpg',
        'characters/troll-hero.png',
        'characters/trollspoppy2.png'
    ]
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

    for(let x = 0; x < (number); x++){
                //const ranNum = Math.floor(Math.random() * characterImages.length)
                //console.log(ranNum)
                //setLevelArr(...x)
                levelArr.push(x)
                console.log(levelArr)
            }

    useEffect(() => {
        

    }, []);

    const cardStyles = {
        width: '20vh',
    }

    return ( 
        <>
            {levelArr.map((index) =>
                <div key={index}>
                    <CardImages
                        name={`card_${index}`}
                        styles={cardStyles}
                        levelChoice={`card_${index}`}

                />
                </div>)}
               
            
        </>
     );
}
 
export default GamePlay;

 */