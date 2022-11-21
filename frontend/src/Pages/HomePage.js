import React from "react";
import ThemeSwitch from "../Components/ThemeSwitch";

const HomePage = () => {
    return(
        <div className="main-page">
            <h1>Hi! I'm James Ocaña</h1>
            <img src="https://imgur.com/03RgQJa.jpg" alt="profile pic"/>
            <ThemeSwitch />
        </div>
    )
}

export default HomePage;