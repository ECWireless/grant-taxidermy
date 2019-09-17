import React, { Component } from 'react';
import "scroll-behavior-polyfill";
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

// Components
import Sidebar from './components/Sidebar';

export default class App extends Component {
	state = {
		menuOpen: false,

		myRefServices: null,
		myRefPrices: null,
		myRefAbout: null,
		myRefPhotos: null,
		myRefContact: null,
	}

	onMenuHandler = () => {
		this.setState({
			...this.state,
			menuOpen: !this.state.menuOpen
		})
	}

	handleScrollHome = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}

	sidebarScrollServices = () => {
		window.scrollTo(0, 510);
		this.onMenuHandler();
	}

	handleScrollServices = () => {
		window.scrollTo({
			top: this.myRefServices.offsetTop,
			behavior: 'smooth'
		});
	}

	sidebarScrollPrices = () => {
		window.scrollTo(0, 920);
		this.onMenuHandler();
	}

	handleScrollPrices = () => {
		window.scrollTo({
			top: this.myRefPrices.offsetTop,
			behavior: 'smooth'
		});
	}

	sidebarScrollAbout = () => {
		window.scrollTo(0, 1800);
		this.onMenuHandler();
	}

	handleScrollAbout = () => {
		window.scrollTo({
			top: this.myRefAbout.offsetTop,
			behavior: 'smooth'
		});
	}

	sidebarScrollPhotos = () => {
		window.scrollTo(0, 2330);
		this.onMenuHandler();
	}

	handleScrollPhotos = () => {
		window.scrollTo({
			top: this.myRefPhotos.offsetTop,
			behavior: 'smooth'
		});
	}

	sidebarScrollTestimonials = () => {
		window.scrollTo(0, 3000);
		this.onMenuHandler();
	}

	sidebarScrollContact = () => {
		window.scrollTo(0, 3650);
		this.onMenuHandler();
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
					onMenuHandler={this.onMenuHandler}

					handleScrollHome={this.handleScrollHome}
					handleScrollServices={this.handleScrollServices}
					handleScrollPrices={this.handleScrollPrices}
					handleScrollAbout={this.handleScrollAbout}
					handleScrollPhotos={this.handleScrollPhotos}
					handleScrollContact={this.handleScrollContact}
				/>
				
				<Sidebar
					menuOpen={this.state.menuOpen}
					onMenuHandler={this.onMenuHandler}
					sidebarScrollServices={this.sidebarScrollServices}
					sidebarScrollPrices={this.sidebarScrollPrices}
					sidebarScrollAbout={this.sidebarScrollAbout}
					sidebarScrollPhotos={this.sidebarScrollPhotos}
					sidebarScrollTestimonials={this.sidebarScrollTestimonials}
					sidebarScrollContact={this.sidebarScrollContact}
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
