import React from "react";
import "../public/style.css"

const Project = ({ projects }) => {
    let allProjects = projects.map((p, idx) => {
        return (
            <div className="col s6">
                <div className="card large" style={{
                                height: 550 + "px",}} key={idx}>
                    <div className="card-stacked">
                        <div class="card-image">
                            <img style={{
                                width: "auto",
                                height: 300 + "px",
                                marginTop: 10 + "px",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }} src={p.picture} />
                        </div>
                        <div className="card-content">
                            <span class="card-title">{p.project}</span>
                            {p.description} <br />
                            <div className="project-skill-list" style={{display: "flex", flexFlow: "wrap", minHeight: "max-content" }}>
                            {p.technologies.map((tech, index) => {
                                return (
                                    <div className="project-skill" style={{minWidth: "max-content", marginTop: 3+"px", marginBottom: 3+"px"}}>
                                    {tech}
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                        <div className="card-action">
                            <a size="small" href={p.github} target="_blank">Github</a>
                            <a size="small" href={p.link} target="_blank">Live Link</a>
                        </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row">
            {allProjects}
        </div>
    )
}

export default Project;