import React from 'react';

// Photos
import DeerTriangle from '../assets/prices/deer-triangle.png';

export default function Prices() {
    return (
        <div className="prices">
            <h1 className="prices__heading-1 heading-1">Prices</h1>
            <div className="prices__border" />
            <p className="prices__paragraph-1">We use only competition quality eyes and jaw sets and use state of the art materials</p>

            <img src={DeerTriangle} alt="dear-triangle" className="prices__deer-photo" />
            <div className="prices__shoulder-mount-container">
                <h2 className="heading-2">Dear Shoulder Mount: $495</h2>
                <div className="prices__paragraph-2-container">
                    <p className="prices__paragraph-2">Mule Deer Shoulder Mount: $500</p>
                    <br />
                    <p className="prices__paragraph-2">Bear Shoulder Mount: $525</p>
                    <p className="prices__paragraph-2">Bear Full Mount: $300 per foot</p>
                    <p className="prices__paragraph-2">Bear Rug: $150 per foot</p>
                    <br />
                    <p className="prices__paragraph-2">Boar Shoulder Mount: $600</p>
                    <br />
                    <p className="prices__paragraph-2">Coyote Full Mount: $535</p>
                    <p className="prices__paragraph-2">Coyote Rug: $430</p>
                    <p className="prices__paragraph-2">Coyote Tan: $125</p>
                    <p className="prices__paragraph-2">Coyote Shoulder Mount: $425</p>
                    <p className="prices__paragraph-2">Bases for full mounts extra - Call for Info</p>
                    <br />
                    <p className="prices__paragraph-2">African Game  - Call for Info</p>
                </div>
            </div>

            <div className="prices__other-mount-container">
                <h2 className="heading-2">Other Mounts</h2>
                <div className="prices__paragraph-2-container">
                    <p className="prices__paragraph-2">Caribou Shoulder Mount: $825</p>
                    <br />
                    <p className="prices__paragraph-2">Elk Shoulder Mount: $825</p>
                    <br />
                    <p className="prices__paragraph-2">Fox Full Mount: $535</p>
                    <p className="prices__paragraph-2">Fox Rug: $375</p>
                    <p className="prices__paragraph-2">Fox Tan: $125</p>
                    <br />
                    <p className="prices__paragraph-2">Deer Skull Cleaning: $115</p>
                    <p className="prices__paragraph-2">Bear Skull Cleaning: $140</p>
                    <p className="prices__paragraph-2">Coyote Skull Cleaning: $85</p>
                    <br/>
                    <p className="prices__paragraph-2">Fur Tanning Available - Call for Info</p>
                    <br/>
                    <p className="prices__paragraph-2">Other Services Available - Call for Info​</p>
                </div>
            </div>

            <div className="prices__note">
                <p className="prices__note-heading">Please Note</p>
                <ul>
                    <li className="prices__note-paragraph">Deposit required at time of drop off</li>
                    <li className="prices__note-paragraph">All prices are subject to change</li>
                    <li className="prices__note-paragraph">All proper tags must accompany mount</li>
                    <li className="prices__note-paragraph">All hides are professionally tanned</li>
                </ul>
                
            </div>
            <div className="prices__note-block" />
        </div>
    )
}
