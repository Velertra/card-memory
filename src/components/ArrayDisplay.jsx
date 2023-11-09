import { array } from "prop-types";
import { useEffect, useState } from "react";

//pictures are displaying randomly, all 4.
const ArrayDisplay = () => {
    const [selectedPics, setSelectedPics] = useState([]);
    const characterImages = [
        '/public/characters/branchtroll.png',
        'characters/guy-diamond-trolls.jpg',
        'characters/troll-hero.png',
        'characters/trollspoppy2.png'
    ];

    useEffect(() => {
        const reorder = (arr) => {
            for(let x = arr.length - 1; x > 0; x--){
                const randomNum = Math.floor(Math.random() * (x + 1));
                [arr[x], arr[randomNum]] = [arr[randomNum], arr[x]];
            }
        };

        const randomArea = Array.from({ length: 4} , (_, index) => index);
        console.log(randomArea)
        const selectedArea = randomArea.map(
            (index) => characterImages[index]
        );

        const duplicatedNumbers = [...selectedArea];
        reorder(duplicatedNumbers);

        setSelectedPics(duplicatedNumbers);

    }, [])
    
    /* function realFunc(){
        let result = '';
        for(let x = 0; x < 2; x++){
            result += characterImages[getRandomNumber()]
        }
        //console.log(result)
        return result
    } */

    /* function getRandomNumber(){
        return Math.floor(Math.random() * characterImages.length );
        //const otherNumber = (Math.floor(Math.random() * 4 ));
    } */

    const thishurr = {
        width: '10vh',
    }
    
    return ( 
        <div>
      {selectedPics.map((number, index) => (
        <span key={index}>{}<img style={thishurr} src={number}></img></span>
      ))}
    </div>
     );
}
 
export default ArrayDisplay;