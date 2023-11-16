import { useEffect, useState } from "react";

const PlayCards = ( {index, image, handleImgClick, initialFlip}) => {
    const [isFlipped, setIsFlipped] = useState(initialFlip);

    const handleFlipClick = (e) => {
        setIsFlipped(!isFlipped);
        handleImgClick(e);
      };
   
      useEffect(() => {
        setTimeout(() => {
          setIsFlipped(initialFlip)
        }, 1600)
      }, [initialFlip])

      useEffect(() => {
        setTimeout(() => {
          setIsFlipped(true)
        }, 1600)
      }, [])

    return ( 
        <div className={`card ${isFlipped ? 'flipped' : ''}`} >
            <div className="card-inner" src='/public/icons/cardTrolls.svg'>
                <div className="card-front">
                    <img  className={`image-${index}`} src={image}></img>
                </div>
                <img name={image} onClick={(e) => handleFlipClick(e)} id={`image-${index}`} className='card-back' src='/public/icons/cardTrolls.svg'></img>
            </div>
          </div>    
     );
}
 
export default PlayCards;