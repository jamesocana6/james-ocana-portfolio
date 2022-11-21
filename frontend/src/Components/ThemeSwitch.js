import React from "react";

const ThemeSwitch = () => {
    function handleClick(event) {
        let elements = document.querySelectorAll("h3")
        console.log(elements);
        console.log(event.target.innerText.substring(0,3));
        elements.forEach(element => {
            console.log(element)
            element.classList.add(event.target.innerText.substring(0,3));
        });
    }

    return(
        <div>
            <ul onClick={handleClick}>I am a: (click on the icon to change the theme)
                <li>environmentalist</li>
                <li>gamer</li>
                <li>sports fan</li>
            </ul>
        </div>
    )
}

export default ThemeSwitch;