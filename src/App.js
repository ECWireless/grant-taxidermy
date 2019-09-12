import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<header className="header">Header</header>
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
