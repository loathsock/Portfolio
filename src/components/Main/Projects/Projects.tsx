import React from 'react'
import mathGame from './../../../assets/imgs/math.jpg'
import gamestart from './../../../assets/imgs/gamestart.jpg'
import gameover from './../../../assets/imgs/gameover.jpg'
import {Link} from 'react-router-dom'
import { ProjectContainer, H, ProjectCard, ImageContainer, Image, Description, Span, Ol, SubHeader, Li } from './ProjectsStyle';
interface StyledMain {
    darkMode?: boolean,
    toggleMode?: (param: any) => void,
  }

const Projects = ({darkMode, toggleMode}: StyledMain) => {
    return (
        <>
        <H darkMode={darkMode}>My Projects</H> 
        <ProjectContainer darkMode= {darkMode} toggleMode= {toggleMode}>
            <ProjectCard darkMode= {darkMode}>
                <ImageContainer>
                    <Image src={gamestart}>
                        
                    </Image>
                    <Image src={mathGame}>
                        
                        </Image>
                        <Image src={gameover}>
                        
                        </Image>
                </ImageContainer>

                <Description>
                 <SubHeader darkMode= {darkMode}> Two-player math game </SubHeader>
                   <Span darkMode= {darkMode}>Technologies used: React-Native </Span>
                   <Ol darkMode= {darkMode}>
                       <Li  darkMode= {darkMode} style={{listStyle: 'inside'}}>Inspired</Li>
                       <Li darkMode= {darkMode} style={{listStyle: 'inside'}}>there</Li>
                       <Li darkMode= {darkMode} style={{listStyle: 'inside'}}>world</Li>
                   </Ol>
                   <a  style={{fontSize: '1.2rem', textDecoration: 'underline', color: '#007a47', fontFamily: 'roboto'}} href='https://github.com/loathsock/math-game'> Repo</a>
                </Description>
            </ProjectCard>
        </ProjectContainer>
        </>
    )
}

export default Projects
