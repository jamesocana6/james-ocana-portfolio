import React from "react";

const WorkExperience = ({ experience }) => {
    return (
        <div className="work-panel">
            <div className="work-content">
                <span className="work-company">{experience.company}</span>
                <span className="work-role">{experience.role}</span>
                <span className="work-dates">{experience.dates}</span>
                <span className="work-location">{experience.location}</span>
                <div className="work-r-list">
                    {experience.responsibilities.map((r, index) => {
                        return (
                            <span className="work-r" key={"r" + index}>
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

