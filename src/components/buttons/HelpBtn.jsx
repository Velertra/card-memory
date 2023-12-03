import { useState } from 'react';

const HelpBtn = ({handleHelpBtn}) => {
    const [wasHelpClicked, setWasHelpClicked] = useState(false)

    function handleHelpBtn(){
        if(!wasHelpClicked){
            setWasHelpClicked(true);
        } else {
            setWasHelpClicked(false);
        }   
    }

    return (
        <>
            <div>    
                {wasHelpClicked 
                ? 
                <div className='help-tab'>
                    <p>Click the cards until you find a pair that matches.</p>
                    <p>Click on Trolls logo to go home</p>
                </div> : null}
                    <img
                        className="help-btn"
                        src="/icons/help-circle.svg" 
                        alt="help-btn"
                        onClick={() => handleHelpBtn()}
                    />
            </div> 
        </>
      );
}
 
export default HelpBtn;