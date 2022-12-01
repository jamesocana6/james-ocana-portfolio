import React from "react";

const ThemeSwitch = () => {
    function handleClick(event) {
        let headers = document.querySelectorAll("h3");
        let projectPanel = document.querySelectorAll("div.project-panel");
        let projectAction = document.querySelectorAll("div.project-action");
        let projectContent = document.querySelectorAll("div.project-content");
        let projectSkill = document.querySelectorAll("span.project-skill");
        let footer = document.querySelectorAll("div.footer");
        let body = document.querySelectorAll("body");
        let floating = document.querySelectorAll("div.floating");
        let navbar = document.querySelectorAll("div#nav-bar");
        let button1 = document.querySelectorAll("button.btn");
        let button2 = document.querySelectorAll("a.btn");
        let h1 = document.querySelectorAll("h1");
        let h2 = document.querySelectorAll("h2");
        let h3 = document.querySelectorAll("h3");
        let h4 = document.querySelectorAll("h4");
        let h5 = document.querySelectorAll("h5");
        let h6 = document.querySelectorAll("h6");
        let workPanel = document.querySelectorAll("div.work-panel");
        let workTabs = document.querySelectorAll("div.work-tabs");
        let workTab = document.querySelectorAll("span.work-tab");
        let elements = [...headers, ...body, ...projectPanel, 
            ...projectContent, ...projectSkill, ...footer, 
            ...floating, ...navbar, ...button1, ...button2,
            ...h1, ...h2, ...h3, ...h4, ...h5, ...h6,    
            ...workPanel, ...workTabs, ...workTab, ...projectAction,
        ]
        elements.forEach(element => {
            if (element.classList.contains("env")) {
                element.classList.remove("env");
            }
            if (element.classList.contains("gam")) {
                element.classList.remove("gam");
            }
            if (element.classList.contains("spo")) {
                element.classList.remove("spo");
            }
            if (element.classList.contains("coo")) {
                element.classList.remove("coo");
            }
            element.classList.add(event.target.classList[1]);
        });
    }

    return(
        <div>
            <ul className="themeSwitcher" onClick={handleClick}>OUTSIDE OF CODING, I ENJOY: 
                <li className="themeSwitch env">NATURE</li>
                <li className="themeSwitch gam">VIDEO GAMES</li>
            </ul>
            <div className="shake">(TRY CLICKING ONE OF THE WORDS ABOVE!)</div>
            <ul className="themeSwitcher wip" >
                <li className="themeSwitch coo">COOKING (WIP)</li>
                <li className="themeSwitch spo">SPORTS (WIP)</li>
            </ul>
        </div>
    )
}

export default ThemeSwitch;