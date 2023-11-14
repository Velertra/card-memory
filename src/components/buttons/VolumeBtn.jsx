import BackgroundMusic from "../../utilities/Music";
import { useState } from 'react'

const VolumeBtn = () => {
    const [playMusic, setPlayMusic] = useState(false)

    function handleVolume(){
        if(!playMusic){
        setPlayMusic(true)
        } else {
            setPlayMusic(false)
        }
    }

    return (
        <div>
            {!playMusic ? null : <><BackgroundMusic /></>}
            {!playMusic
                ?
                <img 
                    className="volume-btn"
                    src="/icons/volume-x.svg"
                    alt="mute"
                    onClick={() => handleVolume()}
                />
                : 
                <img
                className="volume-btn"
                src="/public/icons/volume-2.svg" 
                alt="sound-on"
                onClick={() => handleVolume()}
                />}
        </div>
      );
}
 
export default VolumeBtn;