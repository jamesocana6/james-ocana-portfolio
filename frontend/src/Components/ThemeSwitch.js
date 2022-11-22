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
        let elements = [...headers, ...body, ...projectPanel, ...projectContent, ...projectSkill, ...footer, ...floating, ...navbar]
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
            <ul className="themeSwitch" onClick={handleClick}>OUTSIDE OF CODING, I ENJOY: <span className="shake">(CLICK ON ONE OF THE WORDS!!)</span>
                <li className="themeSwitch env">NATURE</li>
                <li className="themeSwitch gam">VIDEO GAMES</li>
                <li className="themeSwitch spo">SPORTS</li>
                <li className="themeSwitch coo">COOKING</li>
            </ul>
        </div>
    )
}

export default ThemeSwitch;