import styled from 'styled-components'
interface Dark {
  darkMode?: boolean,
  toggleMode?: (param: any) => void,
}


export const ProjectContainer = styled.div<Dark>` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color:${(darkmode)=> darkmode.darkMode ? '#707070' : 'white' } ;
  margin: 6rem 0;
  border-radius: 2rem;
  @media (max-width: 500px) {
     
  }
`

export const ProjectCard = styled.div<Dark>` 
  background-color:${(darkmode)=> darkmode.darkMode ? '#1b1b1b' : 'white' } ;

  display: flex;
  justify-content: center;
  align-items: center; 
  width: 85%;
  height: 70%; 
  border-style: solid;
  border-color: ${(darkmode)=> darkmode.darkMode ? '#1b1b1b' : '#f5f5f5' }   ;
  border-width: thin;
  border-radius: 2rem;
  box-shadow: ${(darkmode)=> darkmode.darkMode ? '0 10px #222222' :  '0 10px #ececec' } ;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 80%;
    height: 30%;
  }
`
export const ImageContainer = styled.article<Dark>` 
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100%;
  width: 50%;
  gap: 1rem;
`
export const Image = styled.img<Dark>` 
   width: 28%;
   height: 90%;
`
export const Description = styled.article<Dark>` 
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: column; 
   padding-left: 1.5rem;
   height: 100%;
   width: 50%;
`

export const P = styled.p<Dark>`
    color: ${(darkmode)=> darkmode.darkMode ? 'white' : '#000' } ;
    font-size: 16px;
`

export const Span = styled.span<Dark>`
    color: ${(darkmode)=> darkmode.darkMode ? '#ffc400' : '#000' } ;

    font-size: 16px;
`
export const Ol = styled.ol<Dark>`
    color: ${(darkmode)=> darkmode.darkMode ? 'white' : '#000' } ;

    height: 60px;
`



export const H = styled.h3<Dark>`
    color: ${(darkmode)=> darkmode.darkMode ? '#fff' : '#000' } ;

   margin-top : 2rem ; 
    @media (max-width: 500px) {
      margin-top: 15rem;
    } 
  
`
export const SubHeader = styled.h3<Dark>` 
    color: ${(darkmode)=> darkmode.darkMode ? '#ffc400' : 'black' } ;
  
`
export const Li = styled.li<Dark>` 
    color: ${(darkmode)=> darkmode.darkMode ? '#ffc400' : 'black' } ; 
    
`