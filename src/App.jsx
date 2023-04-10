import Name from './Name';
import Nav from './Nav';
import AboutMe from './AboutMe';
import './App.css'

function App() {
  return (
  <>
    <Nav></Nav>
    <div id="blur">
      <Name></Name>
      <AboutMe></AboutMe>
    </div>
  </>
  )
}

export default App;