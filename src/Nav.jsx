import { useState } from "react";
import Hamburger from "./Hamburger";

function Nav() {
    
    const [hamOpen, setHamOpen] = useState(false);

    const toggleHam = () => {
        setHamOpen(!hamOpen)
    }

    return (
    <>
        <nav className="navBar">   
            <div></div>
            <div>
                <div id="ham" onClick={toggleHam}>
                    <Hamburger isOpen={hamOpen}/>
                </div>
                <a className="navA" href="#">About</a>
                <a className="navA" href="#">Experience</a>
                <a className="navA" href="#">Projects</a>
                <a className="navA" id="resume" href="#">Resume</a>
            </div>
        </nav>
        <style jsx>{`
            @media screen and (max-width: 750px) {
                #ham {
                    display: block;
                }

                .navA {
                    display: ${hamOpen ? 'inline-block' : 'none'};
                    font-size: 1.5em;
                    line-height: 3em;
                    margin-left: 30%;
                }

                #resume {
                    margin-left: 30%;
                    margin-top: 20%;
                }

                .navBar {
                    margin-left: ${hamOpen ? '50%' : '0'};
                    width: ${hamOpen ? '50%' : '100%'};
                    position: ${hamOpen ? 'fixed' : 'static'};
                    height: 100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
            }
        `}</style>
    </>
    );
}

export default Nav