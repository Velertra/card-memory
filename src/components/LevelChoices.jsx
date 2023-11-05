import CardImage from './CardImages';
import { useState } from 'react';


const LevelChoices = ({ levelChoice, pickLevel}) => {
    const [level, setLevel] = useState('');

    function HandleOnClick(){
        setLevel('yello')
    }

    return ( 
        <>
            <CardImage 
                levelChoice='easy'
                pickLevel={pickLevel}
            />
            <CardImage 
                levelChoice='med'
                pickLevel={pickLevel}
            />
            <CardImage 
                levelChoice='hard'
                pickLevel={pickLevel}
            />
            {/* <h2 className={pickLevel + "-btn-text"}>{pickLevel}</h2> */}
        </>    
     );
}
 
export default LevelChoices;