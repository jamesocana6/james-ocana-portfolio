import React from "react";
import ThemeSwitch from "../Components/ThemeSwitch";

const HomePage = () => {
    return(
        <div className="container">
            <h1>Hi! I'm James Ocaña</h1>
            <img style={{height: 300, borderRadius: 150}} src="https://imgur.com/03RgQJa.jpg" alt="profile pic"/>
            <ThemeSwitch/>
        </div>
    )
}

export default HomePage;