import {useState, useEffect} from 'react';
import MergeArr from '../utilities/CreateImageArray';

const TrialGamePlay = ({gameLevel}) => {
    const [level, setLevel] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [onSwitch, setOnSwitch] = useState(false)
    const [win, setWin] = useState(true);
    let imgFirstPick = {
        name:'',
        title:'',
    };
    const styler = {
        width: 100, 
    }

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
        //console.log(card.slice(-15))
        const newState = imageArray.map(images => ((images.includes(card.slice(-15))) ? '' : images));
        
        setImageArray(() => newState)
        
    }

    function compareTheCards(card, imgTitle){
        if(imgFirstPick.name == card && imgFirstPick.title !== imgTitle){
            console.log("go get a cookie!")
            deleteFromArray(card)
        } else if(imgFirstPick.name == card && imgFirstPick.title == imgTitle){
            console.log('you hit this on purpose?')
        }else{
            console.log('sorry ya tried')
        }
        imgFirstPick = {
            name:'',
            title:'',
        };
    }

    function handleImgClick(e){
        const cardValue = e.target.src;
        const titleName = e.target.className;
        if(imgFirstPick.name == ''){
            imgFirstPick = {
                name: cardValue,
                title: titleName,
            }
        } else{
            compareTheCards(cardValue, titleName); 
        }
    }

    useEffect(() => {
        if(!win && imageArray.every(section => section.length == 0)){
            console.log('you win!')
        }
        setWin(() => false)
    }, [imageArray])

    useEffect(() => {
        handleSet()
        if(level !== ''){
            const test = MergeArr(level)
            setImageArray(test)
            setOnSwitch(true)
        }
    }, [level])

    return ( 
        <>
        {onSwitch ? imageArray.map((image, index) => 
            <div style={styler} className={`imgContainer-${index}`} key={index}>
                <img onClick={(e) => handleImgClick(e)} className={`image-${index}`} style={styler} key={index} src={image}></img>
            </div>
        ) : <div>theycantdothat</div>}
        </>
     );
}
 
export default TrialGamePlay;