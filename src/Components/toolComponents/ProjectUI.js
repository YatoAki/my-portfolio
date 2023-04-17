import React from "react";
import "./ProjectUI.css"
import css from "../../assets/🦆 icon _file type css_.png"
import firebase from "../../assets/🦆 icon _file type firebase_.png"
import html from "../../assets/🦆 icon _file type html_.png"
import reactjs from "../../assets/🦆 icon _file type reactjs_.png"
import figma from "../../assets/Figma (icon — Colour).png"
import tailwind from "../../assets/🦆 icon _file type tailwind_.png"
import ImageUI from "./ImageUI";
import styled from "styled-components";

const RightText = styled.div`
    text-align:right;
    width:500px;


    @media  screen and (max-width: 800px) {
        text-align:center;
        width:fit-content;
    }    
`

const LeftText = styled.div`
    text-align:left;
    width:500px;


    @media  screen and (max-width: 800px) {
        text-align:center;
        width:fit-content;
    }    
`

const ProjectUI = (props) => {


    const rightTextGenerater = () => {

        return(
            <RightText className="textArea">
                <h1 >{props.title}<span>{props.emoji}</span></h1>
                <p>{props.text}</p>
                <div className="icons">
                    {textIconGenerator()}
                </div>
                <a href={props.link} target="_blank">Check on GitHub</a>
            </RightText>
        )
    }

    const leftTextGenerater = () => {
        return(
            <LeftText className="textArea">
                <h1 >{props.title}<span>{props.emoji}</span></h1>
                <p>{props.text}</p>
                <div className="icons">
                    {textIconGenerator()}
                </div>
                <a href={props.link} target="_blank">Check on GitHub</a>
            </LeftText>
        )
    }

    const textIconGenerator = () => {
        console.log(props.tech)
        return(
            props.tech.map((name) => {
                if (name === "html"){
                    return(<img src={html} alt="" />)
                }

                if (name === "css"){
                    return(<img src={css} alt="" />)
                }

                if (name === "reactjs"){
                    return(<img src={reactjs} alt="" />)
                }

                if (name === "firebase"){
                    return(<img src={firebase} alt="" />)
                }

                if (name === "tailwind"){
                    return(<img src={tailwind} alt="" />)
                }

                if (name === "figma"){
                    return(<img src={figma} alt="" />)
                }

                return null
            }
            )
        )
        
    }

    return(
        <>
            {
                props.direction === "right" ? 
                <div className="ProjectUI rightProject">
                    <ImageUI imgSrc={props.pic} width={400} height={300}/>
                    {rightTextGenerater()}
                </div>
                :
                <div className="ProjectUI leftProject">
                    {leftTextGenerater()}
                    <ImageUI imgSrc={props.pic} width={400} height={300}/>
                </div>
            }
            

            
        </>
    )
}

export default ProjectUI