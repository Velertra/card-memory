import{ useState } from 'react';

const CardImages = ({ levelChoice, styles, pickLevel, name}) => {

   function handleOnClick(x){
        if(pickLevel !== undefined){
            pickLevel(x)
        }
   }

    return ( 
        <>
            <h2
                alt={levelChoice}
                onClick={() => handleOnClick(levelChoice)}
                className={levelChoice + "-text"}>
                {levelChoice}
            </h2>
        </>
        
     );
}
 
export default CardImages;