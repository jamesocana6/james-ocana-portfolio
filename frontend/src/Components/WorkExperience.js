import React from "react";

const WorkExperience = ({experience}) => {
    let allProjects = experience.map((e, idx) => {
        return (
            <div className="project-panel" key={"e"+idx}>
                <div className="project-content">
                    <span className="project-title">{e.project}</span>
                    {e.description} <br />
                    <div className="project-skill-list">
                        {e.technologies.map((tech, index) => {
                            return (
                                <span className="project-skill" key={"skill" + index}>
                                    {tech}
                                </span>
                            );
                        })}
                    </div>
                    <div className="project-action">
                        <a href={e.github} target="_blank">Github</a>
                        <a href={e.link} target="_blank">Live Link</a>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div>
            <h3>Work Experience</h3>

        </div>
    )
}

export default WorkExperience;

