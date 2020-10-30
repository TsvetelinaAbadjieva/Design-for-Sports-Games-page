import React from 'react';
import styled from 'styled-components';
import  logo from './assets/logo-delasport-white.jpg';
import Dropdown from './dropdown';

const NavContainer = styled.div`
    $navigation-background:darken($main-color,20%);
    background-color:#1f2228;
    height:8vh;
    top:0;
    left:0;
    padding:1rem;
`
const InnerNavBlock=styled.div`
    width:70%;
    // height:8vh;
    color:white;
    display:grid;
    grid-template-columns:85% 15%;
    justify-content:space-arownd;
    align-items:space-evenly;
    align-content:center;
    margin:0 auto;
    position:relative;
    padding:1rem;
`
const Logo=styled.img`
    width:250px;
    height:45px;
    color:inverse;
    self-align:middle;
    vertical-align:middle;
`
const Nav=()=>{
    return(
        <NavContainer>
            <InnerNavBlock>
                <Logo src={logo}/>
                <Dropdown/>
            </InnerNavBlock>
        </NavContainer>
    )
}
export default Nav;