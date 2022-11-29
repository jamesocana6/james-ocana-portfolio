import React from "react";

const Project = ({ projects }) => {
    let allProjects = projects.map((p, idx) => {
        return (
            <div className="project-panel env" key={idx}>
                <div className="project-thumb env">
                    <video src={p.thumb} autoplay="true" muted loop/>

                    {/* <img src={p.thumb} /> */}
                </div>
                <div className="project-content env">
                    <span className="project-title env">{p.project}</span>
                    <div className="project-description">
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
                        <a href={p.demo} target="_blank">Demo</a>
                        <a href={p.link} target="_blank">App</a>
                    </div>
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