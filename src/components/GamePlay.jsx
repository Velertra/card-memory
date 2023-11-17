import {useState, useEffect} from 'react';
import MergeArr from '../utilities/CreateImageArray';
import CardImages from '../utilities/CardImages';
import PlayCards from './buttons/PlayCards';
import LoadingPage from './Page/LoadingImage'

const GamePlay = ({ gameLevel, styleChange }) => {
    const [level, setLevel] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [onSwitch, setOnSwitch] = useState(false)
    const [win, setWin] = useState(true);
    const [initialFlip, setInitialFlip] = useState(false);
    let imgFirstPick = {
        name:'',
        title:'',
    };
    

    //number of cards to duplicate
    function handleSet(){
        if(gameLevel === 'easy'){
            setLevel(() => 2);
        } else if(gameLevel === 'med'){
            setLevel(() => 4);
        } else {
            setLevel(() => 8);
        }
    }

    function deleteFromArray(card){
        setTimeout(() => {
            const newState = imageArray.map(images => ((images.includes(card.slice(-15))) ? '' : images));
            setImageArray(() => newState)
        }, 1600)
       
    }

    //if another card was pressed this will check that card with the previous card hit
    function compareTheCards(card, imgTitle){
        if(imgFirstPick.name == card && imgFirstPick.title !== imgTitle){
            console.log("go get a cookie!")
            deleteFromArray(card)
        } else if(imgFirstPick.name == card && imgFirstPick.title == imgTitle){
            console.log('you hit this on purpose?')
        }else{
            console.log('sorry ya tried')
            setInitialFlip(!initialFlip)
        }
    }

    //when a card is clicked in the game this will check to see if another card has been pressed
    function handleImgClick(e){
        const cardValue = e.target.name;
        const titleName = e.target.id;
        if(imgFirstPick.name == ''){
            imgFirstPick = {
                name: cardValue,
                title: titleName,
            }
        } else{
            compareTheCards(cardValue, titleName); 
        }
    }

    //calls after imageArray is empty;
    /* useEffect(() => {
        if(!win && imageArray.every(section => section.length == 0)){
            console.log('you win!')
        }
        setWin(() => false)
    }, [imageArray]) */

    useEffect(() => {
        handleSet()
        if(level !== ''){
            const images = MergeArr(level)
            setImageArray(images)
            setTimeout(() => {
                setOnSwitch(true)
            }, 1000)
        }
    }, [level])

    return ( 
        <>
        {onSwitch ? imageArray.map((image, index) => 
            <PlayCards
                key={index}
                image={image}
                index={index}
                handleImgClick={handleImgClick}
                initialFlip={initialFlip}
            />
            ) 
            : 
            <LoadingPage />}
        </>
     );
}
 
export default GamePlay;