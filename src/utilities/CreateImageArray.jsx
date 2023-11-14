const imageSelection = [
    '/public/characters/bigblue.svg',
    '/public/characters/branchtroll.svg',
    '/public/characters/guyDiamond.svg',
    '/public/characters/kingGrist.svg',
    '/public/characters/orangeGuy.svg',
    '/public/characters/pinkgiraffe.svg',
    '/public/characters/poppytroll.svg',
    '/public/characters/princessbridget.svg',
    '/public/characters/trollhero.svg'
];

//creates an array of numbers 0 - "cardAmount" that doesnt repeat a previous number as long as theres enough images(imageSelection).
function createRandomNumberArr(cardAmount){
    const randomNumbers = [];
        for(let x = 0; randomNumbers.length < cardAmount; x++){
            const number = Math.floor(Math.random() * imageSelection.length)
            if(randomNumbers === undefined){ 
                randomNumbers.push(number);
            } else if(!randomNumbers.includes(number)){
                randomNumbers.push(number);
            }
        }
    return randomNumbers;
}

//reorders Array
function reorderArray(array){
    const newArr = [...array, ...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr
}

//merges number array and image array together so you get an array with duplicate images in random order
function MergeArr(cardAmount){
    const ranNumbers = createRandomNumberArr(cardAmount);
    const reorderedArr = reorderArray(ranNumbers);
     let trollsArray = [];
    for(const image in reorderedArr){
        const number = reorderedArr[image];
        trollsArray.push(imageSelection[number])
    }
    return trollsArray;
}

export default MergeArr;


