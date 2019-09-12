import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
	state = {
		linkClassActive: "header__link active"
	}

	render() {
		return (
			<div className="container">
				<header className="header">
					<ul className="header__list">
						<li className="header__link active">HOME</li>
						<li className="header__link">SERVICES</li>
						<li className="header__link">PRICES</li>
						<li className="header__link">ABOUT</li>
						<li className="header__link">PHOTOS</li>
						<li className="header__link">CONTACT</li>
					</ul>
				</header>
				<div className="banner">Home Banner</div>
				<div className="services">Services</div>
				<div className="about">About</div>
				<div className="photos">Photos</div>
				<div className="testimonials">Testimonials</div>
				<div className="contact">Contact</div>
				<footer className="footer">Footer</footer>
			</div>
		)
	}
}
