import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { BodyWrapper } from './components/NavBar/NavBarStyles';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)   
  const [darkMode, setDarkMode] = useState(false)   
  const toggle = () => {
    setIsOpen(!isOpen)
  } 
  const toggleMode = () => {
    setDarkMode(!darkMode)
  } 
  return (  
    <div className="App">
      <BodyWrapper darkMode={darkMode}> 
    <Router>   
         <NavBar isOpen={isOpen} darkMode={darkMode} toggle={toggle} toggleMode={toggleMode}  /> 
         <Main />
    </Router>  
     </BodyWrapper>
     
    </div>
  );
}

export default App;
