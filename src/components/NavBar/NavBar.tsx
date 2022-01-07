import React from 'react'
import { Nav, Logo, Ul, BodyWrapper, Li } from './NavBarStyles';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'
import logo from '/home/glory/Desktop/Portfolio/portfolio/src/assets/imgs/logo.svg'
import Moon from '/home/glory/Desktop/Portfolio/portfolio/src/assets/imgs/Moon.svg'
import MoonLight from '/home/glory/Desktop/Portfolio/portfolio/src/assets/imgs/moon-light.png'
import  BurgerMenu  from "./Burger/Burger"; 
import  Menu  from "./Menu/Menu";
interface NavTypes  {
   isOpen : boolean,
   darkMode: boolean,
   toggle: (param: any) => void,
   toggleMode: (param: any) => void
   
}


const NavBar= ({isOpen, darkMode, toggleMode, toggle}: NavTypes) => {   

    return (
    
        <Nav isOpen={isOpen} darkMode={darkMode} >   
        <BurgerMenu isOpen={isOpen}  darkMode={darkMode}  toggle={toggle} />
        <Menu isOpen={isOpen} toggle={toggle} />
            
            <Logo isOpen={isOpen} >
              <img className='logo-image'  src={logo} />
            </Logo>
            <Ul>
              
             <Link className='link' to='about'>
                   <Li darkMode={darkMode}>About</Li>
                   
            
                 </Link>
                <Link className='link' to='#'>
                <Li darkMode={darkMode}>Work</Li>

                 </Link>
                <Link className='link' to='#'>
                <Li darkMode={darkMode}>Blog</Li>

                 </Link>  
                <Link className='link' to='#'>
                <Li darkMode={darkMode}>Contact</Li> 

                 </Link>
                 <li> 
                     {darkMode ? 
                     <img className='moon' src={MoonLight} onClick={toggleMode}/> :
                     <img className='moon' src={Moon} onClick={toggleMode}/> 

                    }
                 </li>

            </Ul>
        </Nav>                                                                                             
   
   
       
    )
}

export default NavBar
