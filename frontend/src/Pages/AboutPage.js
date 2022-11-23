import React from "react";
import Skills from "../Components/Skills";
import WorkSection from "../Components/WorkSection";

const AboutPage = () => {
    return(
        <div id="about-me">
            <h3>ABOUT ME</h3>
            <p>I'm a software engineer with a strong growth mindset that graduated from General Assembly’s software engineering bootcamp. Prior to this program, I worked in a cross-functional position at Underwriters Laboratories as a project engineer for their growing automotive materials department. I was eager to learn everything and I expanded the team from 1 person to 5 people and got promoted to team lead. In my free time, I taught myself Java and grew to love solving problems and coding. I’m excited to utilize my strong collaboration and communication skills alongside my new passion for coding. </p>
            <WorkSection/>
            <Skills/>
        </div>
    )
}

export default AboutPage;