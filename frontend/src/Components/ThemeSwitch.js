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
        let elements = [...headers, ...body, ...projectPanel, ...projectContent, ...projectSkill, ...footer, ...floating]
        console.log(elements);
        console.log(event.target.innerText.substring(0,3));
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
            element.classList.add(event.target.innerText.substring(0,3));
        });
    }

    return(
        <div>
            <ul className="themeSwitch" onClick={handleClick}>I am a: (click on the word to change the theme)
                <li className="themeSwitch env">environmentalist</li>
                <li className="themeSwitch gam">gamer</li>
                <li className="themeSwitch spo">sports fan</li>
            </ul>
        </div>
    )
}

export default ThemeSwitch;