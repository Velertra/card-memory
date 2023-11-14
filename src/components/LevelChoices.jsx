import CardImage from '../utilities/CardImages';
import { useState } from 'react';


const LevelChoices = ({ levelChoice, pickLevel}) => {
    const [level, setLevel] = useState('');


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
        </>    
     );
}
 
export default LevelChoices;