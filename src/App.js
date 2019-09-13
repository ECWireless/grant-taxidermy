import React, { Component } from 'react';
import './App.scss';

// Containers
import Header from './containers/Header';
import Banner from './containers/Banner';

// Shapes
import Triangles from './assets/shapes/triangle-light-3.png';

export default class App extends Component {
	state = {
		linkClassActive: "header__link active"
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Banner />
				<div className="services">
					<div className="services__heading-container">
						<h1 className="servies__heading-1 heading-1">Services</h1>
					</div>
					<div className="border-container">
						<div className="border-right" />
					</div>
					<div className="services__paragraph-container">
						<p className="services__paragraph">
							We carefully measure your animal or skin in order to preserve the size
							and uniqueness of each trophy.
						</p>
					</div>
					<div className="services__container">
						<div className="services__deer-mounts">
							<h3 className="heading-3">Deer Mounts</h3>
							<p className="services__mounts-paragraph">Shoulder Mounts</p>
							<p className="services__mounts-paragraph">Full Mounts</p>
							<p className="services__mounts-paragraph">& European Mounts</p>
							<p className="services__prices">See Prices</p>
							<img src={Triangles} alt="triangles" className="services__triangles" />
						</div>
						<div className="services__game">
							<h3 className="heading-3">Large & Small Game</h3>
							<p className="services__game-paragraph">Bear, Mule, Deer, Elk,</p>
							<p className="services__game-paragraph">Moose, African Game,</p>
							<p className="services__game-paragraph">Wolf, Boar, Coyote, & Fox</p>
							<p className="services__prices">See Prices</p>
							<img src={Triangles} alt="triangles" className="services__triangles" />
						</div>
						<div className="services__rugs">
							<h3 className="heading-3">Rugs</h3>
							<p className="services__rugs-paragraph">Bear, Deer, Horse</p>
							<p className="services__rugs-paragraph">Wolf, Coyote, & Fox</p>
							<p className="services__rugs-paragraph">–</p>
							<p className="services__prices">See Prices</p>
							<img src={Triangles} alt="triangles" className="services__triangles" />
						</div>
					</div>
				</div>
				<div className="about">About</div>
				<div className="photos">Photos</div>
				<div className="testimonials">Testimonials</div>
				<div className="contact">Contact</div>
				<footer className="footer">Footer</footer>
			</div>
		)
	}
}
