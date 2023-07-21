import React from "react";
import Project from "../Components/Project";
import thumb1 from "../public/thumbnail/Numero-Silent-Thumbnail.mp4"
import thumb2 from "../public/thumbnail/FightSchedule-Silent-Thumbnail.mp4"
import thumb3 from "../public/thumbnail/TourneyBoard-Silent-Thumbnail.mp4"
import thumb4 from "../public/thumbnail/MyTinerary-Silent-Thumbnail.mp4"
import thumb5 from "../public/thumbnail/Tasks-FullDemo.mp4"

const ProjectPage = () => {
    let projects = [
        {
            project: "Numero",
            link: "https://numerogame.com",
            demo: "https://youtu.be/FcF4q_hB_G4",
            github: "https://github.com/jamesocana6/numero-game",
            description: "Math game to practice mental math and pattern recognition.",
            technologies: ["JavaScript", "React Native", "Node", "Express", ],
            picture: "https://i.imgur.com/uULfVGm.png",
            thumb: thumb1,
        },
        {
            project: "Fight Schedule",
            link: "https://fight-schedule.onrender.com/",
            demo: "https://youtu.be/Evcb1yFYH3Y",
            github: "https://github.com/jamesocana6/fight-schedule",
            description: "React scraper app with MMA and Boxing event schedule all in one place.",
            technologies: ["React", "JavaScript", "Cheerio", "Axios", "Express", "Node", "CSS"],
            picture: "https://i.imgur.com/977NQaM.png",
            thumb: thumb2,
        },
        {
            project: "Tourney Board",
            link: "https://tourneyboard.herokuapp.com/tournament/",
            demo: "https://youtu.be/yp_hw4574t4",
            github: "https://github.com/jamesocana6/bracket-maker",
            description: "Django app where you can post a tournament you are host or join a tournament as a player.",
            technologies: ["Django", "Python", "AWS S3", "Materialize", "PostgreSQL"],
            picture: "https://i.imgur.com/vLi6Bf9.png?1",
            thumb: thumb3,
        },
        {
            project: "MyTinerary",
            link: "https://floating-plateau-88049.herokuapp.com/home",
            demo: "https://youtu.be/MUFyEkPRQE8",
            github: "https://github.com/jamesocana6/mytinerary",
            description: "EJS, Express, and Node.js app for social media travel app where you can rate your past trips and see other people's trips.",
            technologies: ["Node", "Express", "EJS", "JavaScript", "NoSQL", "MongoDB", "Materialize", "CSS", "HTML"],
            picture: "https://i.imgur.com/hY0yyLd.jpg",
            thumb: thumb4,
        },
        {
            project: "Tasks",
            link: "https://jamesocana6.github.io/tasks-project/",
            demo: "https://youtu.be/jj1tafKqVKk",
            github: "https://github.com/jamesocana6/tasks-project",
            description: "JS, HTML, and CSS to do list app that has motivational quotes that you can save.",
            technologies: ["JavaScript", "CSS", "HTML"],
            picture: "https://i.imgur.com/AmRlqif.png",
            thumb: thumb5,
        },
    ]

    return(
        <div id="projects-page">
            <h3 className="env" >MY PROJECTS</h3>
            <Project projects={projects}/>
        </div>
    )
}

export default ProjectPage;