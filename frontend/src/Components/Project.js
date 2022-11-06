import React from "react";

const Project = ({projects}) => {
    let allProjects = projects.map((p, idx) => {
        return(
            <div>
                <h1>Project component</h1>
                Project {idx+1}
                {p.project}
                {p.link}
                {p.description}
                {p.picture}
            </div>
        )
    })
    return(
        <div>
            {allProjects}
        </div>
    )
}

export default Project;