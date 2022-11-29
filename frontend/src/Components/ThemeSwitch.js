import React from "react";

const ThemeSwitch = () => {
    function handleClick(event) {
        let headers = document.querySelectorAll("h3");
        let projectPanel = document.querySelectorAll("div.project-panel");
        let projectContent = document.querySelectorAll("div.project-content");
        let projectSkill = document.querySelectorAll("div.project-skill");
        let footer = document.querySelectorAll("div.footer");
        let body = document.querySelectorAll("body");
        let floating = document.querySelectorAll("div.floating");
        let navbar = document.querySelectorAll("div#nav-bar");
        let button1 = document.querySelectorAll("button.btn");
        let button2 = document.querySelectorAll("a.btn");
        let elements = [...headers, ...body, ...projectPanel, ...projectContent, ...projectSkill, ...footer, ...floating, ...navbar, ...button1, ...button2]
        console.log(elements);
        console.log(event.target.classList[1]);
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
            element.classList.add(event.target.classList[1]);
        });
    }

    return(
        <div>
            <ul className="themeSwitcher" onClick={handleClick}>OUTSIDE OF CODING, I ENJOY: 
                <li className="themeSwitch env">NATURE</li>
                <li className="themeSwitch gam">VIDEO GAMES (WIP)</li>
                <li className="themeSwitch spo">SPORTS (WIP)</li>
                <li className="themeSwitch coo">COOKING (WIP)</li>
            </ul>
            <div className="shake">(TRY CLICKING ONE OF THE WORDS ABOVE!)</div>
        </div>
    )
}

export default ThemeSwitch;