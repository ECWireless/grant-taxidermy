import React from 'react';

// Shapes
import headerTriangle from "../assets/shapes/triangle-dark-3.png";
import { ReactComponent as MenuButton } from '../assets/svgs/menu.svg';

export default function Header(props) {
    return (
        <header className="header">
            <img
                src={headerTriangle}
                alt="header-triangle"
                className="header__triangle-1"
                onClick={props.handleScrollHome}
            />
            <ul className="header__list">
                <li className="header__link active" onClick={props.handleScrollHome}>HOME</li>
                <li className="header__link" onClick={props.handleScrollServices}>SERVICES</li>
                <li className="header__link" onClick={props.handleScrollPrices}>PRICES</li>
                <li className="header__link" onClick={props.handleScrollAbout}>ABOUT</li>
                <li className="header__link" onClick={props.handleScrollPhotos}>PHOTOS</li>
                <li className="header__link" onClick={props.handleScrollContact}>CONTACT</li>
            </ul>
            <img
                src={headerTriangle}
                alt="header-triangle"
                className="header__triangle-2"
                onClick={props.handleScrollHome}
            />
            <MenuButton onClick={props.onMenuHandler} className="header__menu" />
        </header>
    )
}
