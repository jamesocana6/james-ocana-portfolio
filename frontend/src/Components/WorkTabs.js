import React from "react";

const WorkTabs = ({ experience, setTab }) => {
    function handleClick(event) {
        setTab(event.target.getAttribute("idx"));
    } 
    let tabs = experience.map((e, idx) => {
        return (
            <span idx={idx} onClick={handleClick} className="work-tab" key={"tab"+idx}>{e.company}</span>
        )
    })
    return (
        <div className="work-tabs">
            <span className="work-tab-title">Company</span>
            {tabs}
        </div>
    )
}

export default WorkTabs;

