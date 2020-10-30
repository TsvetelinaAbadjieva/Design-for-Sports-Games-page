import React from 'react';
import styled from 'styled-components';

export const MainWrapper=styled.div`
    text-align:justify;
    overflow:hidden;
    & h6{
        margin:0;
        padding:0;
    }
`
export const WrapperLinks=styled.div`
    position:relative;
    height:15vh;
    padding-top:1rem;
    display:flex;
    flex-direction:row;
    overflow:hidden;
    & div{
        display:flex;
        flex-direction:row;
    }
`
const Img=styled.img`
    width:50px;
    height:50px;
    position:absolute;
    top:10px;    
    left:10px;
`
export const LinkCategory=styled.a.attrs((props)=>({
    type:props.type ? props.type:''
}))`
    width:${(props)=>props.width? props.width:'75px'};
    height:${(props)=>props.height? props.height:'75px'};
    border-radius:${(props)=>props.borderRadius? props.borderRadius:'15%'};
    background-color:#1f2228;
    margin:0.3rem;
    text-decoration:none;
    font-size:1rem;
    color:#babcc1b5;
    position:relative;
    & span{
        diplsay:block;
        position:absolute;
        bottom:-45px;
        left:0;
    }
    & i{
        padding:5px;
        margin:0;
    }

`
const Categories=({...props})=>{
    let {src1,src2} = props.theme;
    let links=[
    {
        title:'Ice Hockey',
        src:src1
    },{
        title:'American Football',
        src:src2
    },
    {
        title:'Ice Hockey',
        src:src2
    },{
        title:'American Football',
        src:src2
    },
    {
        title:'Ice Hockey',
        src:src1
    },{
        title:'American Football',
        src:src2
    },{
        title:'Basketball',
        src:src1
    },    {
        title:'Ice Hockey',
        src:src1
    },{
        title:'American Football',
        src:src2
    },
    {
        title:'Ice Hockey',
        src:src2
    },{
        title:'American Football',
        src:src2
    },
    {
        title:'Ice Hockey',
        src:src1
    },{
        title:'American Football',
        src:src2
    },{
        title:'Basketball',
        src:src1
    },
    {
        title:'Ice Hockey',
        src:src1
    },{
        title:'American Football',
        src:src2
    },
];

let allLinks = links.map((link,index)=>(
    <div key={index} style={{overflow:'hidden',maxWidth:'70%'}}>
        <LinkCategory key={index} href={link.title} type="button">
            <i><Img  src={link.src}/></i>
            <span>{link.title}</span>
        </LinkCategory>
    </div>
))
    return(
        <>
        <MainWrapper>
            <h6>Sports categories</h6>
            <WrapperLinks>
            { allLinks}
            </WrapperLinks>
        </MainWrapper>
        </>
    )
}
export default Categories;