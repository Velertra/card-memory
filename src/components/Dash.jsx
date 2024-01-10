import { Link } from "react-router-dom";

const Dash = () => {

    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="memory-game">Memory Game</Link>
        </nav>
     );
}
 
export default Dash;