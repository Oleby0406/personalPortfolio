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
                <a className="projectHeader" href="https://digitrecognizer.onrender.com/">Digit Recognizer</a>
                <div className="projectSec">
                    <div className="leftImg">
                        <img src="images/proj2.png" height="250px"/>
                    </div>
                    <p className="projTextRight">
                        Project in computer vision and machine learning designed
                        to recognize individual digits from user drawn images. Made 
                        with Flask and the Python Keras library and trained on the 
                        60,000 digit MNIST dataset using a CNN. 
                    </p>
                </div>
            </div>
        </>
    );
}

export default Projects;