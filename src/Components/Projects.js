import React from "react";
import "./Projects.css"
import ProjectUI from "./toolComponents/ProjectUI"
import Project1 from ".././assets/selfieGenerator.png"
import Project2 from ".././assets/5minute.png"
import Project3 from ".././assets/yoursresolution.png"
import Project4 from ".././assets/10doc.png"

const Projects = () => {
    const projectData = [
        
        {
            pic:Project1,
            title:"Selfie Generator",
            emoji:"📸",
            text:"Upload your photo and swap the background with background art to make it pretty.",
            tech:["html","css","reactjs","figma"],
            link:"https://github.com/YatoAki/selfie-generator",
            specialDetail: {name:"Personal Project", link:"https://yatoaki.github.io/selfie-generator/", emoji:"💼"}
        },
        {
            pic:Project4,
            title:"10 Days of Code",
            emoji:"💻",
            text:"Generate achievement cards for participants of 10DOC by LatTwaeEducation and LatTwaeHack",
            tech:["html","css","reactjs","figma","redux"],
            link:"https://yatoaki.github.io/10DaysOfCode-LTE/",
            specialDetail: {name:"Freelance Project", link:"https://yatoaki.github.io/10DaysOfCode-LTE/", emoji:"💰"}
        },
        {
            pic:Project2,
            title:"5-Minute Chat",
            emoji:"⏳",
            text:"Share your code and create a chat room that only exists for 5 minutes. Try to get to know someone within the time limit.",
            tech:["html","css","reactjs","firebase","tailwind"],
            link:"https://github.com/YatoAki/five-minute-chat",
            specialDetail: {name:"Personal Project", link:"https://yatoaki.github.io/five-minute-chat/", emoji:"💼"}
        },
        {
            pic:Project3,
            title:"Yours Resolution",
            emoji:"📝",
            text:"Answer questions and generate a code to share your new year's resolution with loved ones.",
            tech:["html","css","reactjs","firebase","tailwind"],
            link:"https://github.com/YatoAki/yours-resolution",
            specialDetail: {name:"Hackathon winning project", link:"https://devpost.com/software/yours-resolution", emoji:"🏆"}
        }
    ]  

    return(
        <div className="Projects" id="projects">
            <div className="projectsText hidden">
                <h2 className="whiteTitle">Let’s see some of my projects! 🗂</h2>
                <p className="yellowText">I hope this will convince you to hire me. 🙄</p>
            </div>
            
            {projectData.map((data,key) => {
                return <ProjectUI pic={data.pic} title={data.title} text={data.text} emoji={data.emoji} direction={key%2 === 0 ? "right" : "left"} tech={data.tech} link={data.link} specialDetail={data.specialDetail}/>
            })}
            
        </div>
    )
}

export default Projects