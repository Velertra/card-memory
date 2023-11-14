import{ useState } from 'react';

const CardImages = ({ levelChoice, styles, pickLevel, name}) => {

   function handleOnClick(x){
        if(pickLevel !== undefined){
            pickLevel(x)
        }
   }

    return ( 
        <>
            {/* <img
                className={levelChoice}
                src="/icons/cardTrolls.svg"
                alt={levelChoice}
                style={styles}
                onClick={() => handleOnClick(levelChoice)}
            ></img> */}
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