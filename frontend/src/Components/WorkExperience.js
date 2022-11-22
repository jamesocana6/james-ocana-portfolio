import React from "react";

const WorkExperience = ({ experience }) => {
    return (
        <div className="work-panel env">
            <div className="work-content env">
                <span className="work-company env">{experience.company}</span>
                <span className="work-role env">{experience.role}</span>
                <span className="work-dates env">{experience.dates}</span>
                <span className="work-location env">{experience.location}</span>
                <div className="work-r-list env">
                    {experience.responsibilities.map((r, index) => {
                        return (
                            <span className="work-r env" key={"r" + index}>
                                {r}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;

