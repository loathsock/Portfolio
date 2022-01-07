import styled from 'styled-components';
interface Menu {
  isOpen: boolean,
  toggle: (param: any) => void,

}


export const StyledMenu = styled.aside<Menu>`
  display: none; 
  @media (max-width: 500px) {
  display: ${(isOpen) => (isOpen.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #424242;
  border-radius: 0 0 0% 90%;
  height: 400px; 
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 1s ease-in-out;
  }
  
 
  a {
    font-size: auto;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;