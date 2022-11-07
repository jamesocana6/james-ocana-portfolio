import { Container, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const Skills = () => {
    let itemData = [
        {
            title: "Androic Studio",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        },
        {
            title: "Java",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" 
        },
        {
            title: "JavaScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
        {
            title: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
        },
        {
            title: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
        },
        {
            title: "Django",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
        },
        {
            title: "SQLlite",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" 
        },
        {
            title: "PostgreSQL",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
        },
        {
            title: "NodeJs",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
        },
        {
            title: "ExpressJs",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" 
        },
        {
            title: "HTML5",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" 
        },
        {
            title: "CSS3",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" 
        },
        {
            title: "jQuery",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" 
        },
        {
            title: "MongoDB",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" 
        },
        {
            title: "Materialize",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" 
        },
        {
            title: "AWS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
        },
    ]

    return (
        <div className="container">
            <h1>Here are some technologies and tools I work with:</h1>
            <ImageList cols={6}>
                {itemData.map((item) => (
                    <ImageListItem sx={{width: 60}} key={item.img}>
                        <img
                            src={`${item.img}?w=60`}
                            srcSet={`${item.img}?w=60`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Skills;