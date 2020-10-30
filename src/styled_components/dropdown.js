import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const DropdownUl=styled.ul`
    display:flex;
    flex-direction:column;
    width:150px;
    height:15px;
    list-style-type:none;
    color:#babcc1b5;
    padding:1rem;
    font-size:1rem;
    border:1px solid #babcc1b5;
    border-radius:20px;
    position:relative;
    user-select:none;
    cursor:pointer;
    text-align:left;
    margin:0;
    & span{
        margin-bottom:6%;
    }
    & span i{
        font-size:1rem;
        color:#babcc1b5 !important;
        padding-left:2%;
        float:right;
    }
    & li{
        display:none;
        background:#30353e;
        border:1px solid #babcc1b5;
        padding:2%;
        cursor:pointer;

    }
    &:hover li{
        display:block;
         width:100%;
         height:50px;

    }
`
const Dropdown=()=>{
    const[lang,setLang]=useState('English');
    return(
        <DropdownUl><span>{lang} <i className="arrow down"></i></span>
            <li onClick={()=>setLang('English')}>EN</li>
            <li onClick={()=>setLang('Bulgarian')}>BG</li>
        </DropdownUl>
    )
}
export default Dropdown;