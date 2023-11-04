import CardImage from './CardImages';

const LevelChoices = ({ level, handleonclick}) => {


    return ( 
        <div className={'level-choices'}>
            <CardImage 
                level='easy'
            />
            <CardImage
                level='med'
            />
            <CardImage
                level='hard'
            />
            <h2 className={level + "-btn-text"}>{level}</h2>
        </div>    
     );
}
 
export default LevelChoices;