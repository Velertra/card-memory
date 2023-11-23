import { useEffect, useState } from "react";

const PlayCards = ( {index, image, handleImgClick, initialFlip, isRunning}) => {
    const [isFlipped, setIsFlipped] = useState(initialFlip);
  
    const handleFlipClick = (e) => {
        console.log(isRunning)
        if(!isRunning){
          setIsFlipped(!isFlipped);
          handleImgClick(e);
        }
      };
   
      useEffect(() => {
        setTimeout(() => {
          setIsFlipped(true)
        }, 1600)
      }, [initialFlip])

    return ( 
        <div className={`card ${isFlipped ? 'flipped' : ''}`} >
                    {image !== '' ? <><img id="card-front" className={`image-${index}`} src={image}>
                    </img>
                    <img name={image} onClick={(e) => handleFlipClick(e)} id={`image-${index}`} className='card-back' src='/icons/cardTrolls.svg'></img>
                    </>
                    : <div></div>}
            
          </div>    
     );
}
 
export default PlayCards;