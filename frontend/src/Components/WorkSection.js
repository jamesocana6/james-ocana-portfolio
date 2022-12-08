import React, { useState } from "react";
import WorkExperience from "./WorkExperience";
import WorkTabs from "./WorkTabs";

//USE EFFECT AND USESTATE TO MAKE WORK EXPERIENCE CLICKER

const WorkSection = () => {
    const [tab, setTab] = useState(0)
    let experience = [
        {
            company: "Underwriters' Laboratories",
            role: "Project Engineer",
            dates: "April 2022 - July 2022",
            location: "Melville, NY",
            responsibilities: [
                `- Oversaw and supported the team on daily operations, research, purchasing, expansions, projects (internal and external), testing, laboratory activities, and created documentation within the automotive materials department.`,
                `- Worked cross-functionally with sales and management as a technical resource for all automotive material testing, and worked with 8+ global UL labs to distribute work and help manage workload.`,
                `- Collaborated with global engineering teams weekly to tackle problems and communicate goals in meetings.`,
                `- Focused on providing quick and accurate results and ensuring testing meets clients’ requirements and deadlines increased the number of returning customers by 53% from last year.`,
            ]
        },
        {
            company: "Underwriters' Laboratories",
            role: "Associate Project Engineer",
            dates: "January 2020 - April 2022",
            location: "Melville, NY",
            responsibilities: [
                `- Grew the team from 1 engineer to 4 engineers and 1 technician within 2 years of working there with no prior experience in a related field while also increasing the yearly revenue and maintaining the daily operations.`, 
                `- Managed and tested UL automotive material projects from UL labs in USA, Mexico, Germany, Taiwan, and Japan.`,
                `- Communicated with clients daily to ensure project scope and timelines are met, as well as relaying this information to sales, engineering, and management teams.`,
                `- Designed layout for new automotive testing and material storage room while keeping in mind the flow of material, personnel, equipment requirements and use, and safety.`,
            ]
        },
        {
            company: "Frontier Performance Polymers",
            role: "Project Engineer",
            dates: "April 2019 - December 2019",
            location: "Parsippany, NJ",
            responsibilities: [
                `- Worked closely with the Quality Engineer to perform FAT and LAT testing on molded parts for Department of Defense contract.`,
                `- Researched automation processes for manufacturing to increase the volume of production and reduce chance of human error.`,
                `- Designed fixtures and cutting procedures on a 4-Axis CNC milling machine using CAMWorks, AutoCAD, and G-Code.`,
                `- Manufactured and tested injection molding parameters for production of polymer cartridges and compression molded shields.`,
                `- Performed maintenance and inspections on injection molding, compression molding, CNC machines, and cooling units.`, 
            ]
        },
        {
            company: "Wesco Technologies Inc.",
            role: "Service Engineer",
            dates: "May 2018 - April 2019",
            location: "Long Island City, NY",
            responsibilities: [
                `- Programmed controllers to correct the feed rates of chemicals into cooling tower systems to reduce corrosion within the pipes and equipment and ensuring that the systems are in compliance with EHS requirements.`,
                `- Instructed building engineers and facilities engineers on how to maintain their cooling water systems with a Maintenance Program and Plan (Maintenance Manual).`, 
                `- Performed routine maintenance inspections on client cooling towers.`, 
            ]
        },
        {
            company: "Wesco Technologies Inc.",
            role: "Intern",
            dates: "August 2016 - May 2018",
            location: "Long Island City, NY",
            responsibilities: [
                `- Shadowed engineers as they serviced cooling towers and observed the communication between facilities staff.`,
                `- Constructed and organized documentation and certificates for clients’ cooling towers`, 
                `- Cleaned office files and computer documentation to reduce clutter.`, 
            ]
        },
    ]

    return(
        <>
        <h3 className="work-header env">WORK EXPERIENCE</h3>
        <div className="work-area env">
            <WorkTabs experience={experience} setTab={setTab} />
            <WorkExperience experience={experience[tab]} tab={tab}/>
        </div>
        </>
    )
}

export default WorkSection;

