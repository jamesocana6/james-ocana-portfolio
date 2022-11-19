import React from "react";

const WorkExperience = ({experience}) => {
    let work = experience.map((e, idx) => {
        return (
            <div className="work-panel" key={"e"+idx}>
                <div className="work-content">
                    <span className="work-company">{e.company}</span>
                    <span className="work-role">{e.role}</span>
                    <span className="work-dates">{e.dates}</span>
                    <span className="work-location">{e.location}</span>
                    <div className="work-r-list">
                        {e.responsibilities.map((r, index) => {
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
    })
    return(
        <div>
            <h3>Work Experience</h3>
            {work}
        </div>
    )
}

export default WorkExperience;

