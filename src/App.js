import React, { Component } from 'react';
import './App.scss';

import Logo from './assets/banner/harry-grant-taxidermy-logo-cutout-antlers@2x.png'

// Containers
import Header from './containers/Header';

export default class App extends Component {
	state = {
		linkClassActive: "header__link active"
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="banner">
					<div alt="banner-photo" className="banner__photo" />
					<div className="banner__logo-container">
						<img src={Logo} alt="logo" className="banner__logo" />
					</div>
					<div className="banner__slogan-container">
						<h1 className="banner__slogan">Preserving Memories</h1>
					</div>
				</div>
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
