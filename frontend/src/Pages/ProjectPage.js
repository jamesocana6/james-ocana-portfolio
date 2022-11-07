import { Container } from "@mui/material";
import React from "react";
import Project from "../Components/Project";

const ProjectPage = () => {
    let projects = [
        {
            project: "Fight Schedule",
            link: "Link",
            github: "Github",
            description: "Description",
            technologies: "React, JavaScript, Cheerio, Axios, Express, Node, CSS",
            picture: "Picture",
        },
        {
            project: "Tourney Board",
            link: "Link",
            github: "Github",
            description: "Description",
            technologies: "Django, Python, AWS S3, Materialize, PostgreSQL",
            picture: "Picture",
        },
        {
            project: "MyTinerary",
            link: "Link",
            github: "Github",
            description: "Description",
            technologies: "Node, Express, EJS, JavaScript, NoSQL, MongoDB, Materialize, CSS, HTML",
            picture: "Picture",
        },
        {
            project: "Tasks",
            link: "Link",
            github: "Github",
            description: "Description",
            technologies: "JavaScript, CSS, HTML",
            picture: "Picture",
        },
    ]

    return(
        <Container>
            <h1>ProjectPage component</h1>
            <Project projects={projects}/>
        </Container>
    )
}

export default ProjectPage;