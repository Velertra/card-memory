

const ArrayDisplay = () => {
    const characterImages = [
        'characters/branchtroll.png',
        'characters/guy-diamond-trolls.jpg',
        'characters/troll-hero.png',
        'characters/trollspoppy2.png'
    ];
    
    function realFunc(){
        let result = '';
        for(let x = 0; x < 2; x++){
            result += characterImages[getRandomNumber()]
        }
        return result
    }

    function getRandomNumber(){
        return Math.floor(Math.random() * characterImages.length );
        //const otherNumber = (Math.floor(Math.random() * 4 ));
    }
    
    return ( 
        <>
            
            <img src={realFunc()} />
        </>
     );
}
 
export default ArrayDisplay;