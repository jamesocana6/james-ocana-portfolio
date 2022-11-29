import React from "react";
import Contact from "../Components/Contact";
import Resume from "../Components/Resume";

const ContactPage = () => {
    return(
        <div id="contact-page" className="contact-page">
            <h3 className="env">REACH OUT TO ME</h3>
            <span style={{fontSize: 20}}>I'd love to chat about anything! </span>
            <Contact/>
            <Resume/>
        </div>
    )
}

export default ContactPage;