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
import Contact from './containers/Contact';

// Shapes
import headerTriangle from "./assets/shapes/triangle-dark-3.png";
import footerLogo from './assets/footer/harry-grant-taxidermy-logo-cutout-antlers-1@2x.png';

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
				<Contact />
				
				<footer className="footer">
					<img src={headerTriangle} alt="footer-triangle-left" className="footer__triangle-left" />
					<p className="footer__facebook">Follow us on Facebook</p>
					<div className="footer__middle-container">
						<img src={footerLogo} alt="footer-logo" className="footer__logo"/>
						<p className="footer__credit">Website created by Valtech Creative</p>
					</div>
					<p className="footer__number">412-400-7308</p>
					<img src={headerTriangle} alt="footer-triangle-right" className="footer__triangle-right" />
				</footer>
			</div>
		)
	}
}
