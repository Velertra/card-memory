import CardImage from '../utilities/CardImages';
import { useState } from 'react';

const LevelChoices = ({ levelChoice, pickLevel}) => {

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