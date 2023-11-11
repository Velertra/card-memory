import { useEffect, useState } from "react";
import FirstOne from "../tests/sandbox";

//pictures are displaying randomly, all 4.
const ArrayDisplay = () => {
    //const [selectedPics, setSelectedPics] = useState([]);
    const characterImages = [
        '/public/characters/branchtroll.png',
        'characters/guy-diamond-trolls.jpg',
        'characters/troll-hero.png',
        'characters/trollspoppy2.png'
    ];

    


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