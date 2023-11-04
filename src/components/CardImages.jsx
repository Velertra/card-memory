const CardImages = ({ level, children, styles}) => {

    //const cardStyles = styles;

    return ( 
        <>
            <img 
                className={level}
                src="/icons/cardTrolls.svg"
                alt={level}
                style={styles}
            ></img>
            <h2 className={level + "-btn-text"}>{level}</h2>
        </>
        
     );
}
 
export default CardImages;