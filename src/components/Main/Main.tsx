import React from 'react'
import { MainContent, PersonalItems, SectionOne, SectionTwo, Button } from './MainStyles';

const Main = () => {
    return (
       <MainContent>
    
           <SectionOne  >
              <PersonalItems>
                     <h4 className='main-header'>
                         Hi, I'm Med Djedir. <br />
                         A FullStack Web Developer
                     </h4>

                     <Button>
                         Contact Me
                     </Button>

              </PersonalItems>
           </SectionOne>
           <SectionTwo  >

           </SectionTwo>
       </MainContent>
    )
}

export default Main
