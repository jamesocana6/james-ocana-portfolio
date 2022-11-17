import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_g474dsn", "template_sum9urp", form.current, "hgDnbZECO4l7u0RAV")
            .then((result) => {
                alert("Message sent!")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container'>
            <div className='card' style={{ padding: 10 + "px" }}>
                <div className='row'>
                    <form className='col s12' ref={form} onSubmit={sendEmail}>
                        <div className='row'>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <label htmlFor="icon_prefix" className='active'>Name</label>
                                <input id="icon_prefix" type="text" name='user_name' />
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">email</i>
                                <label htmlFor="icon_prefix" className='active'>Email</label>
                                <input id="icon_prefix" type="email" name='user_email'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">edit</i>
                                <textarea id="textarea1" className="materialize-textarea" name='message'></textarea>
                                <label for="textarea1" className='active'>Message</label>
                            </div>
                        </div>
                        <button type='submit' className="waves-effect waves-light btn"><i class="material-icons left">send</i>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;