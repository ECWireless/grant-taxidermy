import React from 'react';

// Shapes
import headerTriangle from "../assets/shapes/triangle-dark-3.png";

export default function Header() {
    return (
        <header className="header">
            <img src={headerTriangle} alt="header-triangle" className="header__triangle-1" />
            <ul className="header__list">
                <li className="header__link active">HOME</li>
                <li className="header__link">SERVICES</li>
                <li className="header__link">PRICES</li>
                <li className="header__link">ABOUT</li>
                <li className="header__link">PHOTOS</li>
                <li className="header__link">CONTACT</li>
            </ul>
            <img src={headerTriangle} alt="header-triangle" className="header__triangle-2" />
        </header>
    )
}
