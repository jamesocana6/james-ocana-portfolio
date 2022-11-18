import React from "react";

const Project = ({ projects }) => {
    let allProjects = projects.map((p, idx) => {
        return (
            <div className="col s6" key={idx} >
                <div className="card large" style={{
                                height: 525 + "px",}}>
                    <div className="card-stacked">
                        <div className="card-image">
                            <img style={{
                                width: "fit-content",
                                height: 300 + "px",
                                marginTop: 10 + "px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                objectFit: "contain"
                            }} src={p.picture} />
                        </div>
                        <div className="card-content" style={{paddingTop: 5+"px", paddingBottom: 5+"px"}}>
                            <span className="card-title">{p.project}</span>
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