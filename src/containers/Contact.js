import React from 'react';

// Photos
import Logo from '../assets/banner/harry-grant-taxidermy-logo-cutout-antlers-2@2x.png';

export default function Contact() {
    return (
        <div className="contact">
            <h1 className="contact__heading-1 heading-1">Contact</h1>
            <div className="contact__border" />
            <p className="contact__paragraph-1">Give us a ring</p>

            <div className="contact__background" />
                <img src={Logo} alt="contact-logo" className="contact__logo" />
                <div className="contact__info">
                    <div className="contact__info-paragraph-1">5392 Hardt Road</div>
                    <div className="contact__info-paragraph-1">Gibsonia PA, 15044</div>
                    <div className="contact__space-small" />
                    <div className="contact__info-paragraph-1">info@harrygranttaxidermy.com</div>
                    <div className="contact__space-small" />
                    <div className="contact__info-paragraph-2">412-400-7308</div>
                    <div className="contact__space-big" />
                    <div className="contact__info-paragraph-3">Hours:</div>
                    <br/>
                    <div className="contact__info-paragraph-4">Mon - Fri: 9am - 7pm</div>
                    <div className="contact__info-paragraph-4">Saturday: 9am - 10am</div>
                    <div className="contact__info-paragraph-4">Sunday: 9am - 6pm</div>
                </div>

                <form action="#" className="form">
                    <div className="form__group">
                            <input type="text" className="form__input" placeholder="Name" id="name" required />
                            <label htmlFor="name" className="form__label">Name</label>
                    </div>

                    <div className="form__group">
                            <input type="email" className="form__input" placeholder="Email" id="email" required />
                            <label htmlFor="email" className="form__label">Email</label>
                    </div>

                    <div className="form__group">
                            <input type="tel" className="form__input" placeholder="Subject" id="phone" required />
                            <label htmlFor="phone" className="form__label">Subject</label>
                    </div>

                    <div className="form__group">
                            <textarea className="form__input" placeholder="Message" id="message" required />
                            <label htmlFor="message" className="form__label">Message</label>
                    </div>
                    <button className="contact__button">Submit</button>
                </form>
{/*                 
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
                    
                </div> */}
            <div className="contact__background-block" />
        </div>
    )
}
