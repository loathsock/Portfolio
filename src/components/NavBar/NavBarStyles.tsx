import styled from "styled-components";
import {theme} from './theme' 

interface StyledNav {
  isOpen?: boolean,
  darkMode?: boolean,
  toggle?: (param: any) => void,
}

 
export const BodyWrapper = styled.div<StyledNav>`
    width: 100%;
    min-height: 100;
    background-color: ${(darkMode) => (darkMode.darkMode ? theme.primaryDark : "inherit")};
`;  

export const Nav = styled.nav<StyledNav>`
      position:sticky; 
      position: -webkit-sticky;
      top: 0;
      background-color: ${(darkMode) => (darkMode.darkMode ? theme.primaryDark : "inherit")};
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 100%;
      height: 14vh; 
 
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 15vh;
  @media (max-width: 1000px) {
        width: 70%;
        font-size: 15px;
     }
     @media (max-width: 500px) {
       display: none;
     }
`;
export const Logo = styled.div<StyledNav>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 80%;
`;

export const Li = styled.li<StyledNav>`

  &:before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #492059;
  transform: scaleX(0);
}
 &:hover:before {
  transform: scaleX(1);
}

  color: ${(darkMode) => (darkMode.darkMode ? theme.textWhiteColor : theme.textBlackColor)};
    list-style-type: none;
    
`;



// styled burger menu 


export const StyledBurger = styled.button<StyledNav>`

display: none;
  @media (max-width: 500px) { 
       display: flex;
       position: absolute;
       top: 30%;
       right: 1.5rem;
       // display: flex;
       flex-direction: column;
       justify-content: space-around;
       width: 2rem;
       height: 2rem;
       background: transparent;
       border: none;
       cursor: pointer;
       padding: 0;
       z-index: 10;
       
       &:focus {
         outline: none;
       }
       
       div {
         width: 2rem;
         height: 0.25rem;
         background-color: ${(isOpen) => isOpen.isOpen ? "#fff" : "#020202"};  
         border-radius: 10px; 
         transition: all 0.3s linear;
         position: relative;
         transform-origin: 1px;
       
       :first-child {
      transform: ${( isOpen ) => isOpen.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

      :nth-child(2) {
      opacity: ${( isOpen ) => isOpen.isOpen ? '0' : '1'};
       transform: ${( isOpen ) => isOpen.isOpen ? 'translateX(10px)' : 'translateX(0)'};
    }    

    :nth-child(3) {
      transform: ${( isOpen ) => isOpen.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    } 
  }
}
`;

