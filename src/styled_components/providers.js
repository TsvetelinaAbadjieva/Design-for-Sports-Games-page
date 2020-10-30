import React from 'react';
import styled from 'styled-components';
import {MainWrapper, WrapperLinks, LinkCategory} from './categories';

const Providers=({...props})=>{
    const {provider}=props.theme;
    const data=[1,2,3,4,5,6];
    return(
        <MainWrapper>
            <h6>Game Providers</h6>
            <WrapperLinks style={{gridGap:'2%'}}>
                {data.map(index=>
                    <LinkCategory key={index} height="68px" width="17%" borderRadius="4%">
                    <img src={provider} style={{width:'100%',height:'100%',position:'absolute'}}/>
                </LinkCategory>
                )}
            </WrapperLinks>
        </MainWrapper>
    )
}
export default Providers;