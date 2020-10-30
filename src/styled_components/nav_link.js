import React from 'react';
import styled from 'styled-components';
import icon from './assets/icon-club-partner.jpg';

const NavLink = styled.a`
    color:#babcc1b5;
    display:flex;
    flex-direction:row;
    justify-content:start;
    text-decoration:none;
    font-size:1rem;
    height:40px;
    width:160px;
    border-right:1px solid #353537;
    self-align:start;
    text-align:center;
    vertical-align:middle;
    margin:0.5rem;
`
const Icon=styled.img`
    width:45px;
    height:45px;
    margin-left:0;
    padding-right:0.1em;
    transform:scale(1.3);
    background-color:transparent;
`
const NavLinks=()=>{
    return(
        <div style={{display:'flex',justifyContent:'flex-start',textAlign:'center',alignContent:'center',flexDirection:'row',width:'70%'}}>
            <NavLink type="button" href="#main-club-parner"><Icon src={icon}/><span className="text">Main Club Partner</span></NavLink>
            <NavLink type="button" href="#official-shirt-sponsor"><Icon src={icon}/><span>Official Shirt Sponsor</span></NavLink>
        </div>
    )
}
export default NavLinks;