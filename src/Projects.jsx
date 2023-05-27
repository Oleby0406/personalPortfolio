function Projects() {
    return (
        <>
            <div id="projects">
                <h1>Projects</h1>
                <h2 className="projectHeader">Project 1</h2>
                <div className="projectSec">
                    <p className="projTextLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="rightImg">
                        <img src="images/placeHolder.jpg" height="150px" width="150px"/>
                    </div>
                </div>
                <h2 className="projectHeader">Project 2</h2>
                <div className="projectSec">
                    <div className="leftImg">
                        <img src="images/placeHolder.jpg" height="150px" width="150px"/>
                    </div>
                    <p className="projTextRight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Projects;