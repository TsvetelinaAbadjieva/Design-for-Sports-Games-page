import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    width:180px;
    height:${(props)=>props.type =='register'? '45px':'40px'};
    color:${(props)=>props.default ? '#babcc1b5':'white'};
    font-size:1rem;
    font-weight:bold;
    background-color:${(props)=>props.default ? '#33363c':'#63ce79f2'};
    border:#63ce79;
    box-shadow:(1,1,1,0.5);
    border-radius:20px;
    text-align:center;
    cursor:pointer;
    margin:0.5rem;
`
export default Button;