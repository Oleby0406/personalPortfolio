import { useState } from "react";
import Hamburger from "./Hamburger";
import Pdf from "./resume.pdf";

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
                <a className="navA" href="#aboutMe" onClick={toggleHam}>About</a>
                {/*<a className="navA" href="#experience" onClick={toggleHam}>Experience</a>*/}
                <a className="navA" href="#projects" onClick={toggleHam}>Projects</a>
                <a className="navA" id="resume" href={Pdf} target="_blank" onClick={toggleHam}>Resume</a>
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
                    float: ${hamOpen ? 'none': 'right'};
                    position: ${hamOpen ? 'fixed' : 'static'};
                    display: flex;
                    width: 50%;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 0;
                    top: 0px;
                    right: 0;
                    padding-bottom: 0;
                    background-color: ${hamOpen ? '#000060' : '#020234'};
                    filter: none;
                    z-index: 10;
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
                    display: flex;
                    justify-content:${hamOpen ? 'center' : 'auto'};
                    align-items:center;
                    filter: none;
                    background-color: #000060;
                }
            }
        `}</style>
    </>
    );
}

export default Nav