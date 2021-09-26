import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './StyledMenu';
interface MenuToggle {
  isOpen: boolean,
  toggle: (param: any) => void,
}

const  Menu = ({isOpen, toggle}: MenuToggle) => {
  return (
    <StyledMenu isOpen={isOpen} toggle={toggle}>
      <a href="/">
        <span role="img" aria-label="about us"></span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price"></span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Contact
        </a>
    </StyledMenu>
  )
}
export default Menu;  