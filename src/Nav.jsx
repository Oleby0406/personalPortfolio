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
            <div id="space"></div>
            <div></div>
            <Hamburger isOpen={hamOpen}/>
        </div>
        <nav className="navBar">   
            <div></div>
            <div>
                <a className="navA" href="#aboutMe">About</a>
                <a className="navA" href="#">Experience</a>
                <a className="navA" href="#">Projects</a>
                <a className="navA" id="resume" href="resume.pdf" target="_blank">Resume</a>
            </div>
        </nav>
        <style jsx>{`
            @media screen and (max-width: 750px) {
                body {
                    overflow-y: ${hamOpen ? 'hidden' : 'auto'};
                }
                
                #blur {
                    filter: ${hamOpen ? 'blur(2px)' : 'none'};
                }

                #ham {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                    margin-bottom: 0;
                    padding-bottom: 0;
                    background-color: #a3a3a3;
                    filter: none;
                }

                #space {
                    width: 50%;
                    height: 29px;
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
                    filter: none;
                }
            }
        `}</style>
    </>
    );
}

export default Nav