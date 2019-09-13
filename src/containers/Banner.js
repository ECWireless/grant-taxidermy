import React from 'react';

import Logo from '../assets/banner/harry-grant-taxidermy-logo-cutout-antlers@2x.png';

export default function Banner() {
    return (
        <div className="banner">
            <div alt="banner-photo" className="banner__photo" />
            <div className="banner__logo-container">
                <img src={Logo} alt="logo" className="banner__logo" />
            </div>
            <div className="banner__slogan-container">
                <h1 className="banner__slogan">Preserving Memories</h1>
            </div>
        </div>
    )
}
