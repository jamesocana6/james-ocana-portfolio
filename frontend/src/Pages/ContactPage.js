import React from "react";
import Contact from "../Components/Contact";
import Resume from "../Components/Resume";

const ContactPage = () => {
    return(
        <div id="contact-page" className="contact-page">
            <h3>REACH OUT TO ME!</h3>
            I'd love to chat about anything! 
            <Contact/>
            <Resume/>
        </div>
    )
}

export default ContactPage;