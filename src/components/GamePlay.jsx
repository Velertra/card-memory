import {useState} from 'react';
import PropTypes from 'prop-types';
import CardImages from './CardImages';
import LogoBtn from './StartGame';
import LevelChoices from './LevelChoices';


const GamePlay = () => {
    const [gamePlay, setGamePlay] = useState(false);

    const cardStyles = {
        /* backgroundColor: 'lightblue',
        color: 'black', */
        width: '30vh',
    }

    return ( 
        <>
            {gamePlay ? <><CardImages
                styles={cardStyles}
            />
            <CardImages 
                styles={cardStyles}
            />
            <CardImages
                styles={cardStyles}
            />
            <CardImages 
                styles={cardStyles}
            /></>
                :<>
            <LogoBtn />
            <LevelChoices /></>}
        </>
     );
}
 
export default GamePlay;

/* GamePlay.propTypes = {
    check: PropTypes.string.isRequired
} */