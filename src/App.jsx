import Name from './Name';
import Nav from './Nav';
import AboutMe from './AboutMe';
import SideBar from './SideBar';
import Experience from './Experience';
import Projects from './Projects';
import './App.css';

function App() {
  return (
  <>
    <Nav></Nav>
    <SideBar></SideBar>
    <div id="blur">
      <Name></Name>
      <AboutMe></AboutMe>
      {/*
      <Experience></Experience>
      */}
      <Projects></Projects>
    </div>
  </>
  )
}

export default App;