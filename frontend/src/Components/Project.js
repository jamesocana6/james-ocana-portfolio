import React from "react";
import { Card, CardContent } from '@mui/material';

const Project = ({projects}) => {
    let allProjects = projects.map((p, idx) => {
        return(
            <Card variant="outlined">
                <CardContent>
                    <h1>Project component</h1>
                    Project {idx+1}
                    {p.project}
                    {p.link}
                    {p.github}
                    {p.technologies}
                    {p.description}
                    {p.picture}
                </CardContent>
            </Card>
        )
    })
    return(
        <div>
            {allProjects}
        </div>
    )
}

export default Project;