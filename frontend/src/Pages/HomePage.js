import React from "react";
import ThemeSwitch from "../Components/ThemeSwitch";

const HomePage = () => {
    return(
        <div className="main-page env">
            <h1 style={{marginBottom: 0}}>James Ocaña</h1>
            <h4 style={{marginTop: 0}}>Chemical Engineer to Software Engineer</h4>
            <img src="https://imgur.com/03RgQJa.jpg" alt="profile pic"/>
            <ThemeSwitch />
        </div>
    )
}

export default HomePage;