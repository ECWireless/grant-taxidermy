import React, { Component } from 'react';
import './App.scss';

// Containers
import Header from './containers/Header';
import Banner from './containers/Banner';
import Services from './containers/Services';
import Prices from './containers/Prices';
import About from './containers/About';
import Photos from './containers/Photos';
import Testimonials from './containers/Testimonials';

export default class App extends Component {

	render() {
		return (
			<div className="container">
				<Header />
				<Banner />
				<Services />
				<Prices />
				<About />
				<Photos />
				<Testimonials />
				
				<div className="contact">
					<h1 className="contact__heading-1 heading-1">Contact</h1>
					<div className="contact__border" />
					<p className="contact__paragraph-1">Give us a ring</p>

					<div className="contact__background">
						<div className="contact__container">
							<img src="" alt="contact-logo" className="contact__logo" />
							<div className="contact__info">Contact Info</div>
							<div className="contact__form">Contact Form</div>
						</div>
					</div>
				</div>
				<footer className="footer">Footer</footer>
			</div>
		)
	}
}
