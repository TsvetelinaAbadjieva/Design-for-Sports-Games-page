import React from 'react';
import styled from 'styled-components';
import  logo from './assets/logo-delasport-white.jpg';


const FooterWrapper=styled.div`
    display:flex;
    align-items:row;
    flex-wrap:wrap;
    font-size:1rem;
    line-height:1.5rem;
    justify-content:flex-start;
    grid-gap:2%;
    border-top:1px solid #353537;
    padding:2% 0 5% 0;
`
const MenuItems=styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    width:12%;
    color:#babcc1b5;

    & div:first-child{
        padding-bottom:1rem;
        color:white;
        font-weight:bold;
    }
    & div a{
        text-decoration:none;
        color:#babcc1b5;
    }
`
const InfoBlock=styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    text-align:left;
    width:18%;
    color:#babcc1b5;
    flex-wrap:wrap;

    & div:first-child{
        padding-bottom:1rem;
        color:white;
        font-weight:bold;
        img{
            width:100%;
            background:transparent;
            margin-top:-10px;
        }
    }

`
const SocialLinks=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    text-align:left;
    color:#babcc1b5;
    & div{
        display:flex;
        flex-direction:row;
    }
    & div:first-child{
        padding-bottom:1rem;
        color:white;
        font-weight:bold;
    }
    & div a{
        border-radius:25%;
        i{
            font-size:1.5rem;
            color:white;
            background:#343944;
            align-items:center;
            border-radius:50%;
            padding:20%;
            margin:0 1.5rem 0 0;
        }
    }

`

const InfoCompanyBlock=()=>{
    return(
        <InfoBlock>
            <div><img src={logo}/></div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </InfoBlock>
    )
}

const SocialLinksBlock=()=>{
    return(
        <>
        <SocialLinks>
            <div>Follow us</div>
            <div>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
            </div>
        </SocialLinks>
        </>
    );
}
const MenuItemsBlock=()=>{
    return( 
    <>          
        <MenuItems>
            <div>Sport</div>
            <div><a href="#promotions">Promotions</a></div>
            <div><a href="#in-play">In play</a></div>
            <div><a href="#upcoming">Upcoming</a></div>
        </MenuItems>
        <MenuItems>
            <div>Casino</div>
            <div><a href="#live-casino">Live casino</a></div>
        </MenuItems>
        <MenuItems>
            <div>Suport</div>
            <div><a href="#payment-options">Payment Options</a></div>
            <div><a href="#responsible">Responsible</a></div>
            <div><a href="#gambling">Gambling</a></div>
            <div><a href="#faq">FAQ</a></div>
            <div><a href="#payment-options">Payment Options</a></div>
            <div><a href="#responsible">Responsible</a></div>
            <div><a href="#gambling">Gambling</a></div>
            <div><a href="#faq">FAQ</a></div>
        </MenuItems>
        <MenuItems>
            <div>About</div>
            <div><a href="#privacy-policy">Privacy policy</a></div>
            <div><a href="#about">About </a></div>
            <div><a href="#affiliates">Affiliates</a></div>
        </MenuItems>
    </>
    )
}

const Footer=()=>{
    return(
        <>
        <FooterWrapper>
            <InfoCompanyBlock/>
            <MenuItemsBlock/>
            <SocialLinksBlock/>
        </FooterWrapper>
        </>
    )
}
export default Footer;