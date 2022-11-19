import React from "react";

const Project = ({ projects }) => {
    let allProjects = projects.map((p, idx) => {
        return (
            <div className="project-panel" key={idx}>
                <div className="project-img">
                    <img src={p.picture} />
                </div>
                <div className="project-content">
                    <span className="project-title">{p.project}</span>
                    {p.description} <br />
                    <div className="project-skill-list">
                        {p.technologies.map((tech, index) => {
                            return (
                                <span className="project-skill" key={"skill" + index}>
                                    {tech}
                                </span>
                            );
                        })}
                    </div>
                    <div className="project-action">
                        <a href={p.github} target="_blank">Github</a>
                        <a href={p.link} target="_blank">Live Link</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="project-area">
            {allProjects}
        </div>
    )
}

export default Project;