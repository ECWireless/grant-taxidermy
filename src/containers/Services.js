import React from 'react';

// Shapes
import Triangles from '../assets/shapes/triangle-light-3.png';

export default function Services() {
    return (
        <div className="services">
			<h1 className="services__heading-1 heading-1">Services</h1>
            <div className="services__border" />
            <p className="services__paragraph-1">We carefully measure your animal or skin in order to preserve the size and uniqueness of each trophy.</p>

			<div className="services__deer-mounts">
				<h3 className="heading-3 services__margin">Deer Mounts</h3>
			</div>
			<div className="services__deer-mounts-examples">
				<p className="services__mounts-paragraph">Shoulder Mounts</p>
				<p className="services__mounts-paragraph">Full Mounts</p>
				<p className="services__mounts-paragraph">& European Mounts</p>
			</div>
			<div className="services__deer-mounts-prices">
				<p className="services__prices">See Prices</p>
				<img src={Triangles} alt="triangles" className="services__triangles" />
			</div>

			<div className="services__game">
				<h3 className="heading-3">Large & Small Game</h3>
			</div>
			<div className="services__game-examples">
				<p className="services__game-paragraph">Bear, Mule, Deer, Elk,</p>
				<p className="services__game-paragraph">Moose, African Game,</p>
				<p className="services__game-paragraph">Wolf, Boar, Coyote, & Fox</p>
			</div>
			<div className="services__game-prices">
				<p className="services__prices">See Prices</p>
				<img src={Triangles} alt="triangles" className="services__triangles" />
			</div>

			<div className="services__rugs">
				<h3 className="heading-3">Rugs</h3>
			</div>
			<div className="services__rugs-examples">
				<p className="services__rugs-paragraph">Bear, Deer, Horse</p>
				<p className="services__rugs-paragraph">Wolf, Coyote, & Fox</p>
				<p className="services__rugs-paragraph">–</p>
			</div>
			<div className="services__rugs-prices">
				<p className="services__prices">See Prices</p>
				<img src={Triangles} alt="triangles" className="services__triangles" />
			</div>
		</div>
    )
}
