import React from 'react';

// Photos
import Logo from '../assets/banner/harry-grant-taxidermy-logo-cutout-antlers-2@2x.png';

export default function Contact() {
    return (
        <div className="contact">
            <h1 className="contact__heading-1 heading-1">Contact</h1>
            <div className="contact__border" />
            <p className="contact__paragraph-1">Give us a ring</p>

            <div className="contact__background">
                <div className="contact__container">
                    <img src={Logo} alt="contact-logo" className="contact__logo" />
                    <div className="contact__info">
                        <div className="contact__info-paragraph-1">5392 Hardt Road</div>
                        <div className="contact__info-paragraph-1">Gibsonia PA, 15044</div>
                        <br/>
                        <br/>
                        <div className="contact__info-paragraph-1">info@harrygranttaxidermy.com</div>
                        <br/>
                        <br/>
                        <div className="contact__info-paragraph-2">412-400-7308</div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="contact__info-paragraph-3">Hours:</div>
                        <br/>
                        <div className="contact__info-paragraph-4">Mon - Fri: 9am - 7pm</div>
                        <div className="contact__info-paragraph-4">Saturday: 9am - 10am</div>
                        <div className="contact__info-paragraph-4">Sunday: 9am - 6pm</div>
                    </div>
                    <div className="contact__form">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                        <br/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <br/>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" />
                        <br/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <br/>
                        <button className="contact__button">Submit</button>
                    </div>
                </div>
            </div>
            <div className="contact__background-block" />
        </div>
    )
}
