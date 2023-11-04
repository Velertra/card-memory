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

            {wasHelpClicked ? <div className='help-tab'>GO HELP YOURSELF</div> : null}
                <img
                    className="help-btn"
                    src="/public/icons/help-circle.svg" 
                    alt="help-btn"
                    onClick={() => handleHelpBtn()}
                    />
            </div> 
        </>
      );
}
 
export default HelpBtn;