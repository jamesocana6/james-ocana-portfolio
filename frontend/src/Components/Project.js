import React from "react";

const Project = ({ projects }) => {
    let allProjects = projects.map((p, idx) => {
        return (
            <div className="project-panel env" key={idx}>
                <div className="project-img env">
                    <img src={p.picture} />
                </div>
                <div className="project-content env">
                    <span className="project-title env">{p.project}</span>
                    {p.description} <br />
                    <div className="project-skill-list env">
                        {p.technologies.map((tech, index) => {
                            return (
                                <span className="project-skill env" key={"skill" + index}>
                                    {tech}
                                </span>
                            );
                        })}
                    </div>
                    <div className="project-action env">
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