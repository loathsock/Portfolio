import styled from 'styled-components'
interface Dark {
  darkMode: boolean,
}
 



  export const SkillContainer = styled.div`
      display: flex;
      justify-content: center; 
      flex-direction: column;
      min-height: 350px;
      width: 90%;
    
  `
export const Ul = styled.ul<Dark>`
    background-color:  ${(darkmode) => (darkmode.darkMode ? '#707070': '#ffffff')} ;
    border-radius: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));;
    grid-auto-rows:   120px;
    padding-right: 2rem;  
    `

export const Li = styled.li`
    display: grid;
    place-self: center;
    justify-items: center;
    align-items: center;  
    border-radius: 10px;
    background-color: #fff;
    width: 65px;
    height: 65px;
    box-shadow:  2px 2px   #cccccc;
    border-left: .1px solid #cccccc;
    border-top: .1px solid #cccccc;  
    &:hover {
        background-color: #e7e7e7;
    }
    
    `
export const Image = styled.img`
    width: 35px;
    height: 35px; 
`
export const Header = styled.h4<Dark>`
    color:  ${(darkmode) => (darkmode.darkMode ? '#ffff': '#000000')};  
    font-size: 20px;
    font-weight: 400; 
    @media (max-width: 500px) {
        margin-top: 8rem;
    }
`
export const Span = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #494949;
`


