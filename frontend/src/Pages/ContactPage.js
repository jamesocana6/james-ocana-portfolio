import React from "react";
import Contact from "../Components/Contact";
import Email from "../Components/Email";
import Resume from "../Components/Resume";

const ContactPage = () => {
    return(
        <div>
            <h3>Reach out to me!</h3>
            <Contact/>
            <Resume/>
        </div>
    )
}

export default ContactPage;