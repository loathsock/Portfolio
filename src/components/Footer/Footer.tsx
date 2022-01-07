import React from 'react'
import { PageFooter, ItemsContainer, Logo } from './FooterStyles';
import facebook from '../../assets/imgs/facebook.svg'
import github from '../../assets/imgs/github.svg'

const Footer = (props: any) => {
     console.log(props.myRef);
     
    return (
        <PageFooter ref ={props.myRef}>
            <ItemsContainer>
                <a href="https://www.facebook.com/people/Le-Stelios/100051092345473/ ">
                   <Logo src={facebook}>

                   </Logo>
                </a>
                <a href="https://github.com/loathsock">
                    <Logo src={github}>

                    </Logo>
                </a>
            </ItemsContainer>
        </PageFooter>
    )
}

export default Footer
