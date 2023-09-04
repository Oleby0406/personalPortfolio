function Projects() {
    return (
        <>
            <div id="projects">
                <h1>Projects</h1>
                <a className="projectHeader" href="http://oleby0406.pythonanywhere.com/" target="_blank">Data Tracker</a>
                <div className="projectSec">
                    <p className="projTextLeft">
                        Web app designed to collect data from a web source at 
                        given time intervals throughout the day and then process
                        it into visually and numerically easy to understand
                        information. Made with Python and Django. 
                    </p>
                    <div className="rightImg">
                        <img src="images/proj1.png" height="250px" />
                    </div>
                </div>
                <a className="projectHeader" href="#">Project 2</a>
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