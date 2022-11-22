import React, { useState } from "react";
import WorkExperience from "./WorkExperience";
import WorkTabs from "./WorkTabs";

//USE EFFECT AND USESTATE TO MAKE WORK EXPERIENCE CLICKER

const WorkSection = () => {
    const [tab, setTab] = useState(0)
    let experience = [
        {
            company: "Underwriters' Laboratories",
            role: "Associate Project Engineer",
            dates: "April 2022 - July 2022",
            location: "Melville, NY",
            responsibilities: [`- Oversaw and supported the team on daily operations, research, purchasing, expansions, projects (internal and external), testing, laboratory activities, and created documentation within the automotive materials department.`,
            `- Worked cross-functionally with sales and management as a technical resource for all automotive material testing, and worked with 8+ global UL labs to distribute work and help manage workload.`]
        },
        {
            company: "Underwriters' Laboratories",
            role: "Project Engineer",
            dates: "January 2020 - April 2022",
            location: "Melville, NY",
            responsibilities: [`- Grew the team from 1 engineer to 4 engineers and 1 technician within 2 years of working there with no prior experience in a related field while also increasing the yearly revenue and maintaining the daily operations.`, 
            `- Managed and tested UL automotive material projects from UL labs in USA, Mexico, Germany, Taiwan, and Japan. `]
        },
        {
            company: "Frontier Performance Polymers",
            role: "Project Engineer",
            dates: "April 2019 - December 2019",
            location: "Parsippany, NJ",
            responsibilities: [`- Grew the team from 1 engineer to 4 engineers and 1 technician within 2 years of working there with no prior experience in a related field while also increasing the yearly revenue and maintaining the daily operations.`, 
            `- Managed and tested UL automotive material projects from UL labs in USA, Mexico, Germany, Taiwan, and Japan. `]
        },
        {
            company: "Wesco Technologies Inc.",
            role: "Service Engineer",
            dates: "May 2018 - April 2019",
            location: "Long Island City, NY",
            responsibilities: [`- Grew the team from 1 engineer to 4 engineers and 1 technician within 2 years of working there with no prior experience in a related field while also increasing the yearly revenue and maintaining the daily operations.`, 
            `- Managed and tested UL automotive material projects from UL labs in USA, Mexico, Germany, Taiwan, and Japan. `]
        },
        {
            company: "Wesco Technologies Inc.",
            role: "Intern",
            dates: "August 2016 - May 2018",
            location: "Long Island City, NY",
            responsibilities: [`- Grew the team from 1 engineer to 4 engineers and 1 technician within 2 years of working there with no prior experience in a related field while also increasing the yearly revenue and maintaining the daily operations.`, 
            `- Managed and tested UL automotive material projects from UL labs in USA, Mexico, Germany, Taiwan, and Japan. `]
        },
    ]

    return(
        <>
        <h3 className="work-header env">Job Highlights</h3>
        <div className="work-area env">
            <WorkTabs experience={experience} setTab={setTab} />
            <WorkExperience experience={experience[tab]} tab={tab}/>
        </div>
        </>
    )
}

export default WorkSection;

