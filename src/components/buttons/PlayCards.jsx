import { useEffect, useState } from "react";

const PlayCards = ( {index, image, handleImgClick, initialFlip}) => {
    const [isFlipped, setIsFlipped] = useState(initialFlip);
  
    const handleFlipClick = (e) => {
        setIsFlipped(!isFlipped);
        handleImgClick(e);
      };
   
      useEffect(() => {
        console.log(initialFlip)
        setTimeout(() => {
          setIsFlipped(true)
        }, 1600)
      }, [initialFlip])

    return ( 
        <div className={`card ${isFlipped ? 'flipped' : ''}`} >
                    {image !== '' ? <img id="card-front" className={`image-${index}`} src={image}>
                    </img> : <div></div>}
                <img name={image} onClick={(e) => handleFlipClick(e)} id={`image-${index}`} className='card-back' src='/icons/cardTrolls.svg'></img>
            
          </div>    
     );
}
 
export default PlayCards;