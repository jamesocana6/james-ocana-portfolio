import React from "react";
import Project from "../Components/Project";

const ProjectPage = () => {
    let projects = [
        {
            project: "Name",
            link: "Link",
            description: "Description",
            picture: "Picture",
        },
        {
            project: "Name",
            link: "Link",
            description: "Description",
            picture: "Picture",
        },
        {
            project: "Name",
            link: "Link",
            description: "Description",
            picture: "Picture",
        },
    ]

    return(
        <div>
            <h1>ProjectPage component</h1>
            <Project projects={projects}/>
        </div>
    )
}

export default ProjectPage;