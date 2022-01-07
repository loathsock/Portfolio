import styled from 'styled-components'

interface StyledMain {
  darkMode?: boolean,
  toggleMode?: (param: any) => void,
}

export const MainContent = styled.div<StyledMain>`
    width: 100%;
    display: flex;
` 


export const SectionOne = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 5rem;
    min-height: 100vh; 
    width: 100%;  

` 

export const PersonalItems = styled.div`
      display: flex;
      justify-content: space-evenly;
      align-items: start;
      flex-direction: column;
      height: 40%;
      width: 100%;
      text-align: left;
   
`

export const Div = styled.div<StyledMain>`
     height: 100%;
     width: 70%;
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     flex-direction: column;
`

export const Button  = styled.button`
     width: 200px;
     min-height: 50px;
     background-color: #5ff0b3;
     border: none;
     border-radius: 5px;
     font-size: 20px;
     letter-spacing: 1px;
     cursor: pointer;
     &:hover{
     background-color: #494949;
     color: white;
     }
`



export const Span = styled.span<StyledMain>`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 18px;
    font-weight: 350;
    color: ${(darkmode) => (darkmode.darkMode ? '#fff' : '#000')}; 
`
export const First = styled.span<StyledMain>`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: ${(darkmode) => (darkmode.darkMode ? '#fff' : '#049357')}; 
   
`

export const Last = styled.span<StyledMain>`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: ${(darkmode) => (darkmode.darkMode ? '#fff' : '#000')}; 
`
export const P = styled.p<StyledMain>`
line-height: 1.7rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: 350;
    color: ${(darkmode) => (darkmode.darkMode ? '#fff' : '#000')}; 
`
export const Highlighted = styled.span<StyledMain>`
    font-weight: 450;
    color: ${(darkmode) => (darkmode.darkMode ? '#fff' : '#049357')}; 
`