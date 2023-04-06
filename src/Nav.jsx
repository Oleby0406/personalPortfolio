import { useState } from "react";
import Hamburger from "./Hamburger";

function Nav() {
    
    const [hamOpen, setHamOpen] = useState(false);

    const toggleHam = () => {
        setHamOpen(!hamOpen)
    }

    return (
    <>
        <div id="ham" onClick={toggleHam}>
            <div></div>
            <Hamburger isOpen={hamOpen}/>
        </div>
        <nav className="navBar">   
            <div></div>
            <div>
                <a className="navA" href="#">About</a>
                <a className="navA" href="#">Experience</a>
                <a className="navA" href="#">Projects</a>
                <a className="navA" id="resume" href="#">Resume</a>
            </div>
        </nav>
        <style jsx>{`
            @media screen and (max-width: 750px) {
                #ham {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    margin-bottom: 0;
                    padding-bottom: 0;
                    background-color: ${hamOpen ? '#FFFFFF' : '#a3a3a3'};
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
                    margin-top: 0;
                    padding-top: 0;
                    width: ${hamOpen ? '50%' : '100%'};
                    position: ${hamOpen ? 'fixed' : 'static'};
                    height: 100%;
                    display:flex;
                    justify-content:${hamOpen ? 'center' : 'auto'};
                    align-items:center;
                }
            }
        `}</style>
    </>
    );
}

export default Nav