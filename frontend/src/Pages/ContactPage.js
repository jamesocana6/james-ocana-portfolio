import React from "react";
import Contact from "../Components/Contact";
import Email from "../Components/Email";
import Resume from "../Components/Resume";

const ContactPage = () => {
    return(
        <div>
            <h1>ContactPage component</h1>
            <Contact/>
            <Email/>
            <Resume/>
        </div>
    )
}

export default ContactPage;