import React, {useState} from 'react';
import { StyledBurger } from './../NavBarStyles';  
interface Prop {
  isOpen: boolean,
  darkMode: boolean,
  toggle: (param: any) => void,
}

const Burger = ({isOpen, darkMode, toggle}: Prop) => { 
  return (
    <StyledBurger isOpen={isOpen} darkMode={darkMode} toggle={toggle} onClick={toggle}> 
      <div /> 
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;