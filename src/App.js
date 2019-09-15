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

import Backdrop from './components/Backdrop';

// Shapes
import { ReactComponent as CloseButton } from './assets/svgs/cross.svg';

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
		window.scrollTo({
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
				<div className={this.state.menuOpen ? "sidebar-open" : "sidebar-closed"}>
					<div className="sidebar-container">
						<CloseButton className="sidebar-close" />
						<h2 className="sidebar-text" onClick={this.sidebarScrollServices}>Services</h2>
						<h2 className="sidebar-text" onClick={this.sidebarScrollPrices}>Prices</h2>
						<h2 className="sidebar-text" onClick={this.sidebarScrollAbout}>About</h2>
						<h2 className="sidebar-text" onClick={this.sidebarScrollPhotos}>Photos</h2>
						<h2 className="sidebar-text" onClick={this.sidebarScrollTestimonials}>Testimonials</h2>
						<h2 className="sidebar-text" onClick={this.sidebarScrollContact}>Contact</h2>
					</div>
				</div>

				{this.state.menuOpen && <div onClick={this.onMenuHandler} ><Backdrop /></div>}
				
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
