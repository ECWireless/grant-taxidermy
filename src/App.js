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
import Footer from './containers/Footer';

export default class App extends Component {
	state = {
		myRefServices: null,
		myRefPrices: null,
		myRefAbout: null,
		myRefPhotos: null,
		myRefContact: null,
	}

	handleScrollHome = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	handleScrollServices = () => {
		window.scrollTo({
			top: this.myRefServices.offsetTop,
			behavior: 'smooth'
		});
	}

	handleScrollPrices = () => {
		window.scrollTo({
			top: this.myRefPrices.offsetTop,
			behavior: 'smooth'
		});
	}

	handleScrollAbout = () => {
		window.scrollTo({
			top: this.myRefAbout.offsetTop,
			behavior: 'smooth'
		});
	}

	handleScrollPhotos = () => {
		window.scrollTo({
			top: this.myRefPhotos.offsetTop,
			behavior: 'smooth'
		});
	}

	handleScrollContact = () => {
		window.scrollTo({
			top: this.myRefContact.offsetTop,
			behavior: 'smooth'
		});
	}

	render() {
		return (
			<div className="container">
				<Header
					handleScrollHome={this.handleScrollHome}
					handleScrollServices={this.handleScrollServices}
					handleScrollPrices={this.handleScrollPrices}
					handleScrollAbout={this.handleScrollAbout}
					handleScrollPhotos={this.handleScrollPhotos}
					handleScrollContact={this.handleScrollContact}
				/>
				<Banner />

				<div style={{position: 'relative', top: '-50px'}} ref={ (ref) => this.myRefServices=ref }></div>
				<Services />

				<div style={{position: 'relative', top: '-50px'}} ref={ (ref) => this.myRefPrices=ref }></div>
				<Prices />

				<div style={{position: 'relative', top: '-50px'}} ref={ (ref) => this.myRefAbout=ref }></div>
				<About />

				<div style={{position: 'relative', top: '-50px'}} ref={ (ref) => this.myRefPhotos=ref }></div>
				<Photos />

				<Testimonials />

				<div style={{position: 'relative', top: '-50px'}} ref={ (ref) => this.myRefContact=ref }></div>
				<Contact />
				<Footer />
			</div>
		)
	}
}
