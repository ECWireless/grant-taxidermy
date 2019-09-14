import React, { Component } from 'react';
import './App.scss';

// Containers
import Header from './containers/Header';
import Banner from './containers/Banner';
import Services from './containers/Services';
import Prices from './containers/Prices';
import About from './containers/About';

// Photos
import Photo1 from './assets/photos/whitetail-1-harry-grant-taxidermy.png'

export default class App extends Component {
	state = {
		linkClassActive: "header__link active"
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Banner />
				<Services />
				<Prices />
				<About />
				
				<div className="photos">
					<h1 className="photos__heading-1 heading-1">Photos</h1>
					<div className="photos__border" />
					<p className="photos__paragraph-1"> Our goal is to provide you with a truly lifelike, anatomically correct mounts</p>

					<div className="photos__photos-container">
						<img src={Photo1} alt="animal-1" className="photos__photo-1" />
						<img src={Photo1} alt="animal-1" className="photos__photo-2" />
						<img src={Photo1} alt="animal-1" className="photos__photo-3" />
						<img src={Photo1} alt="animal-1" className="photos__photo-4" />
						<img src={Photo1} alt="animal-1" className="photos__photo-5" />
						<img src={Photo1} alt="animal-1" className="photos__photo-6" />
						<img src={Photo1} alt="animal-1" className="photos__photo-7" />
					</div>
				</div>

				<div className="testimonials">Testimonials</div>
				<div className="contact">Contact</div>
				<footer className="footer">Footer</footer>
			</div>
		)
	}
}
