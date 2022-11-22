import React from "react";
import JamesOcanaResume from "../public/resume.pdf"

const Resume = () => {
    return(
        <div className="resume-area env">
            <h3>Download my resume by clicking the button below!</h3>
            <a className="btn" href={JamesOcanaResume} download="James Ocana Resume 2022.pdf" target="_self">Download Resume PDF</a>
        </div>
    )
}

export default Resume;

