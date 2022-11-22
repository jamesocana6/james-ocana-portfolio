import React from "react";
import Contact from "../Components/Contact";
import Resume from "../Components/Resume";

const ContactPage = () => {
    return(
        <div id="contact-page">
            <h3>Reach out to me!</h3>
            <Contact/>
            <Resume/>
        </div>
    )
}

export default ContactPage;