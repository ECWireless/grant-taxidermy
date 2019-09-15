import React from 'react';

// Shapes
import headerTriangle from "../assets/shapes/triangle-dark-3.png";
import footerLogo from '../assets/footer/harry-grant-taxidermy-logo-cutout-antlers-1@2x.png';

export default function Footer() {
    return (
        <footer className="footer">
            <img src={headerTriangle} alt="footer-triangle-left" className="footer__triangle-left" />
            <p className="footer__facebook">Follow us on Facebook</p>
            <div className="footer__middle-container">
                <img src={footerLogo} alt="footer-logo" className="footer__logo"/>
                <p className="footer__credit">Website created by 
                    <a
                        href="https://www.valtechcreative.com/"
                        className="footer__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        > Valtech Creative
                    </a>
                </p>
            </div>
            <p className="footer__number">412-400-7308</p>
            <img src={headerTriangle} alt="footer-triangle-right" className="footer__triangle-right" />
        </footer>
    )
}
