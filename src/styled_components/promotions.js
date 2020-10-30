import React from 'react';
import styled from 'styled-components';
import {CardsWrapper,SportCardItem, TextBlock} from './sport-card';

const MainWrapper = styled.div`
    text-align:justify;
    margin-bottom:0.1rem;
    padding:0;
`

const Promotions=({...props})=>{
    const {promo1,promo2}=props.theme;
    let data =[{
        promo:promo1,
        title:'NBA Fantasy Guaranted Prize Pool & Free Bet!',
        text:'Put in your Fantasy Team and receive a receive a Free sports Bet!'
    },
    {
        promo:promo2,
        title:'Multi Master',
        text:'mB 3000 Jackpot every weekend with mB 300 garanteed payout!'
    }]
    console.log(promo1,promo2)
    return(
        <>
        <MainWrapper>
            <h6>Existing promotions start here</h6>
            <CardsWrapper>
                {data.map((item,index)=>
                <SportCardItem height="30vh" key={index}>
                    <TextBlock style={{ verticalAlign:'baseline',alignContent:'center'}}>
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                    </TextBlock>
                    <img src={item.promo} style={{position:'absolute',bottom:0,right:0, height:'100%',width:'48%'}}/>
                </SportCardItem>
            )}
            </CardsWrapper>
        </MainWrapper>
        </>
    )
}
export default Promotions;