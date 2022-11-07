import { Container } from "@mui/material";
import React from "react";
import Project from "../Components/Project";

const ProjectPage = () => {
    let projects = [
        {
            project: "Numero",
            link: "https://youtu.be/FcF4q_hB_G4",
            github: "https://github.com/jamesocana6/numero-game",
            description: "Android studio math game to practice mental math and pattern recognition.",
            technologies: "Java, SQLlite, Android Studio, XML",
            picture: "https://i.imgur.com/uULfVGm.png",
        },
        {
            project: "Fight Schedule",
            link: "https://fight-schedule.onrender.com/",
            github: "https://github.com/jamesocana6/fight-schedule",
            description: "React scraper app with MMA and Boxing event schedule all in one place.",
            technologies: "React, JavaScript, Cheerio, Axios, Express, Node, CSS",
            picture: "https://i.imgur.com/977NQaM.png",
        },
        {
            project: "Tourney Board",
            link: "https://tourneyboard.herokuapp.com/tournament/",
            github: "https://github.com/jamesocana6/bracket-maker",
            description: "Post a tournament you are hosting or join a tournament as a player.",
            technologies: "Django, Python, AWS S3, Materialize, PostgreSQL",
            picture: "https://i.imgur.com/vLi6Bf9.png",
        },
        {
            project: "MyTinerary",
            link: "https://floating-plateau-88049.herokuapp.com/home",
            github: "https://github.com/jamesocana6/mytinerary",
            description: "Social media travel app where you can rate your past trips and see other people's trips.",
            technologies: "Node, Express, EJS, JavaScript, NoSQL, MongoDB, Materialize, CSS, HTML",
            picture: "https://i.imgur.com/hY0yyLd.jpg",
        },
        {
            project: "Tasks",
            link: "https://jamesocana6.github.io/tasks-project/",
            github: "https://github.com/jamesocana6/tasks-project",
            description: "To do list app that has motivational quotes that you can save.",
            technologies: "JavaScript, CSS, HTML",
            picture: "https://i.imgur.com/AmRlqif.png",
        },
    ]

    return(
        <Container>
            <h1>Projects</h1>
            <Project projects={projects}/>
        </Container>
    )
}

export default ProjectPage;