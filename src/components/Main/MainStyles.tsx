import styled from 'styled-components'



export const MainContent = styled.main`
  height: 75vh;
  display: flex;
` 


  export const SectionOne = styled.section`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0rem 5rem;
      width: 70%;
      height: 100%; 
` 
  export const SectionTwo = styled.section`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0;
      width: 30%;
      height: 100%; 
` 

export const PersonalItems = styled.div`
      display: flex;
      justify-content: space-evenly;
      align-items: start;
      flex-direction: column;
      height: 50%;
      justify-content: start;
      align-items: flex-start;   
      text-align: left;
`

export const Button  = styled.button`
     width: 250px;
     min-height: 50px;
     background-color: #74ffc5;
     border: none;
     border-radius: 5px;
     font-size: 20px;
     letter-spacing: 1px;
     cursor: pointer;

`