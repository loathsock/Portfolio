import React, {useState, useRef} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';   
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
    <>
      <BodyWrapper darkMode={darkMode}> 
    <Router> 
      <Switch>
         
         <Route exact path="/">
         <NavBar isOpen={isOpen} darkMode={darkMode} toggle={toggle} toggleMode={toggleMode}  /> 
         <Main darkMode={darkMode} toggleMode={toggleMode} /> 
            <Footer />

          </Route> 

          <Route path="/foot">
            <Footer />
          </Route>
        </Switch>  
       
    </Router>  
     </BodyWrapper>  
    </>
  );
}

export default App;
