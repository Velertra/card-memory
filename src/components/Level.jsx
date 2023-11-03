const LevelChoices = () => {

    return (
        <>
        <div>
            <img
                className="trolls-logo"
                src="/Trolls_Logo_3.svg"
                alt="trolls-logo"
            />
            <h1 className="game-name">Memory match</h1>
        </div>
        <div className="level-choices">
            <div className="easy-container">
               <img 
                className="easy-btn"
                src="/public/cardTrolls.svg"
                alt="Level Easy"
            />
            <h2 className="easy-btn-text">easy</h2>
            </div>
            <div className="med-container">
               <img 
                className="med-btn"
                src="/public/cardTrolls.svg"
                alt="Level Med"
            />
            <h2 className="med-btn-text">med</h2> 
            </div>
            <div className="hard-container">
               <img 
                className="hard-btn"
                src="/public/cardTrolls.svg"
                alt="Level Hard"
            />
            <h2 className="hard-btn-text">hard</h2>
            </div>
        </div>
        </>
      );
}
 
export default LevelChoices;