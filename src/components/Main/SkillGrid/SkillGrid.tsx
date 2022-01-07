import React, {useState} from 'react'
import Projects from '../Projects/Projects'
import css from '../../../assets/programming_logos/css.svg'
import git from '../../../assets/programming_logos/git.svg'
import react from '../../../assets/programming_logos/react.svg'
import typescript from '../../../assets/programming_logos/typescript.svg'
import javascript from '../../../assets/programming_logos/javascript.svg'
import html from '../../../assets/programming_logos/html.svg'
import nodejs from '../../../assets/programming_logos/nodejs.svg'
import socketIo from '../../../assets/programming_logos/socket-io.svg'
import { Ul, Li, Image, SkillContainer, Header, Span } from './StyledSkillGrid';
interface DarkModeInterface {
  darkMode: boolean,
}




const SkillGrid = ({darkMode}: DarkModeInterface) => {
    //  const LOGOS = [{css: 'css'}, {git: 'git'}, {react: 'React'}, {typescript: 'Typescript'}, {html: 'Html'}, {javascript: 'Javascript'}, {socketIo:'Socket.io'}, {nodejs: 'NodeJs'} ]

     const LOGOS = [
       {
       name: 'css',
       path: css
      },
      {
        name: 'git',
        path: git
      }, 
      {
        name: 'React',
        path: react
      }, 
      {
        name: 'typescript',
        path: typescript
      },
       {
        name: 'nodejs',
        path: nodejs
      }, 
      {
        name: 'Socket.io',
        path: socketIo
      }, 
      {
        name: 'javascript',
        path: javascript
      }, 
      {
        name: 'html',
        path: html
      }, 
    ]
    return (
    
     <SkillContainer >
       <Header darkMode={darkMode}>
        __My Skills
       </Header>
      <Ul darkMode={darkMode} >  
        {LOGOS.map((l, i) => {
          
          
          return <Li key={i}> 
               <Image src={l.path} alt="" /> 
               <Span>{l.name}</Span>
            </Li>  
        })}

      </Ul>
        </SkillContainer>
     
    )
}

export default SkillGrid
