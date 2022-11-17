import React from "react";
import JamesOcanaResume from "../public/resume.pdf"

const Resume = () => {
    return(
        <div>
            <h3>Download my resume by clicking the link below!</h3>
            <a href={JamesOcanaResume} download="James Ocana Resume 2022.pdf" target="_self">Download PDF Resume</a>
        </div>
    )
}

export default Resume;

