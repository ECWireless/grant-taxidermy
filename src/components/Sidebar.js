import React from 'react';

// Components
import Backdrop from './Backdrop';

// Shapes
import { ReactComponent as CloseButton } from '../assets/svgs/cross.svg';

export default function Sidebar(props) {
    return (
        <React.Fragment>
            <div className={props.menuOpen ? "sidebar-open" : "sidebar-closed"}>
                <div className="sidebar-container">
                    <CloseButton className="sidebar-close" onClick={props.onMenuHandler} />
                    <h2 className="sidebar-text" onClick={props.sidebarScrollServices}>Services</h2>
                    <h2 className="sidebar-text" onClick={props.sidebarScrollPrices}>Prices</h2>
                    <h2 className="sidebar-text" onClick={props.sidebarScrollAbout}>About</h2>
                    <h2 className="sidebar-text" onClick={props.sidebarScrollPhotos}>Photos</h2>
                    <h2 className="sidebar-text" onClick={props.sidebarScrollTestimonials}>Testimonials</h2>
                    <h2 className="sidebar-text" onClick={props.sidebarScrollContact}>Contact</h2>
                </div>
            </div>
            {props.menuOpen && <div onClick={props.onMenuHandler} ><Backdrop /></div>}
        </React.Fragment>
    )
}
