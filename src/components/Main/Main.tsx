import React from 'react'
import { MainContent, PersonalItems, SectionOne, Button, Span, First, Last, P, Highlighted } from './MainStyles';
import SkillGrid from './SkillGrid/SkillGrid';
import Projects from './Projects/Projects';
interface DarKMode  {
    darkMode: boolean,
    toggleMode: (param: any) => void
    
 }

const Main = ({darkMode, toggleMode}: DarKMode ) => {
    return (
       <MainContent darkMode={darkMode} toggleMode={toggleMode}>  
      
           <SectionOne  >
              <PersonalItems>
                     
                  
                        <div style={{ height: '100 px'}}>
                        <Span darkMode={darkMode}>
                        HI THERE! I'M 
                            </Span>   <br /> 

                             <First> MED </First>   
                              <Last darkMode={darkMode}>
                               Djedir
                             </Last> 
                             </div>
                           <P darkMode={darkMode}> <Highlighted> A Full-Stack Web Developer</Highlighted>   passionate about creating interactive<br />  applications and experiences on the web.
                        </P>
                     <Button>
                         Contact Me
                     </Button>
                    

              </PersonalItems>

            <SkillGrid darkMode={darkMode}/> 
            <Projects darkMode={darkMode}/>
           </SectionOne>
          
       </MainContent>
    )
}

export default Main
