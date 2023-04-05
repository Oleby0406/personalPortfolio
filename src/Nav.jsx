import { useState } from "react";
import Hamburger from "./Hamburger";

function Nav() {
    
    const [hamOpen, setHamOpen] = useState(false);

    const toggleHam = () => {
        setHamOpen(!hamOpen)
    }

    return (
    <nav className="navBar">   
        <div></div>
        <div>
            <div id="ham" onClick={toggleHam}>
                <Hamburger isOpen={hamOpen}/>
            </div>
            <a className="navA" id="resume" href="#">Resume</a>
            <a className="navA" href="#">Projects</a>
            <a className="navA" href="#">Experience</a>
            <a className="navA" href="#">About</a>
        </div>
    </nav>
    );
}

export default Nav