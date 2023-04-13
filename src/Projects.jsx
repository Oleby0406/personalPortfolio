function AboutMe() {
    return (
        <>
            <div id="projects">
                <h1>Projects</h1>
                <h2 className="projectHeader">Project 1</h2>
                <p className="leftText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <img id="rightImg" src="images/placeHolder.jpg" height="150px" width="150px"/>
                <h2 className="projectHeader">Project 2</h2>
                <p className="rightText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <img id="leftImg" src="images/placeHolder.jpg" height="150px" width="150px"/>
            </div>
        </>
    );
}

export default AboutMe;