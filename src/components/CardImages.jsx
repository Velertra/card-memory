import{ useState } from 'react';

const CardImages = ({ levelChoice, styles, pickLevel, name}) => {
    /* const [level, setLevel] = useState(''); */

    //handle card clicks here for now.
   function handleOnClick(x){
        if(pickLevel !== undefined){
            pickLevel(x)
        }
    
   }

    return ( 
        <div key={name}>
            <img 
                key={name}
                className={levelChoice}
                src="/icons/cardTrolls.svg"
                alt={levelChoice}
                style={styles}
                onClick={() => handleOnClick(levelChoice)}
            ></img>
            {true ? null 
            : 
            <h2
                key={name}
                
                className={levelChoice + "-btn-text"}>
                {levelChoice}
            </h2>}
        </div>
        
     );
}
 
export default CardImages;