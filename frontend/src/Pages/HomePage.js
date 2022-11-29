import React from "react";
import ThemeSwitch from "../Components/ThemeSwitch";

const HomePage = () => {
    return(
        <div id="main-page" className="main-page env">
            <h1 className="env" style={{marginBottom: 0}}>JAMES OCAÑA</h1>
            <h4 className="env" style={{marginTop: 0}}>Chemical Engineer to Software Engineer</h4>
            <img src="https://imgur.com/03RgQJa.jpg" alt="profile pic"/>
            <ThemeSwitch />
        </div>
    )
}

export default HomePage;