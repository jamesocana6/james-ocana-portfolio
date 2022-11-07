import { autocompleteClasses } from "@mui/material";
import React from "react";

const Project = ({ projects }) => {
    let allProjects = projects.map((p, idx) => {
        return (
            <div className="card" style={{width: 500+"px"}} key={idx}>
                <div class="card-image">
                    <img style={{
                        width: "auto",
                        height: 500 + "px",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }} src={p.picture} />
                </div>
                <div className="card-content">
                    <span class="card-title">{p.project}</span>
                    {p.description} <br />
                    Technologies Used:
                    {p.technologies}
                </div>
                <div className="card-action">
                    <a size="small" href={p.github} target="_blank">Github</a>
                    <a size="small" href={p.link} target="_blank">Live Link</a>
                </div>
            </div>
        )
    })
    return (
        <div>
            {allProjects}
        </div>
    )
}

export default Project;