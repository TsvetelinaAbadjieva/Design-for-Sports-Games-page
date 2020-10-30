import React from 'react';
import styled from 'styled-components';
import Button from './button';

export const CardsWrapper = styled.div `
    width:100%;
    display:flex;
    flex-direction:row;
    grid-gap:2%;
    margin-top:3%;
    margin-bottom:3%;

    &:first-child{
        display:block;
    }
`
export const SportCardItem = styled.div `
    background:${(props)=>props.background ? `url(${props.background})`:'#1f2228'};
    width:50%;
    height:${(props)=>props.height ? props.height:'38vh'};
    display:flex;
    flex-direction:row;
    box-shadow:(0,0,0,0.7);
    border-radius:20px;
    position:relative;
    & img{
        border-radius:20px 20px;
    }
`
export const TextBlock=styled.div`
    background:${(props)=>props.background ? `url(${props.background})`:'#1f2228'};
    background-repeat:no-repeat;
    background-size:cover;
    box-sizing:border-box;
    object-fit:cover;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    width:50%;
    text-align:justify;
    justify-content:center;

    & h5{
        text-transform:uppercase;
        padding-left:2rem;
    }
    & h6{
        margin-bottom:0;
        padding:0.5rem 0 0 2rem;
    }
    & button{
        margin-left:2rem;
    }
    & p{
        font-size:1rem;
        padding:1rem; 
        color:#babcc1b5;
        padding-left:2rem;
        line-height:1.5rem;
        vertical-align:middle;
        height:3rem;
    }
`
 export const SportCardList=({...props})=>{
    const {theme}=props;
    const {background,...photos}={...theme.games};
    let data= [
        {
        title:'Sports',
        text:'Price Boost every day on all sports',
        buttonLabel:'Go to Sports',
        background:background,
        src:photos.footballImage
    },
    {
        title:'Casino',
        text:'Offering the best slots and live dealer games',
        buttonLabel:'Go to Casino',
        background:background,
        src:photos.casinoImage
    }
]
    return(
        <>
            <CardsWrapper>
            {data.map(item=>
                <SportCardItem background={item.background}>
                    <TextBlock background={item.background}>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        <Button>{item.buttonLabel}</Button>
                    </TextBlock>
                    <img src={item.src}/>
                </SportCardItem>
            )}
            </CardsWrapper>
        </>
    )
}
