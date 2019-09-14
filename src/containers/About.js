import React from 'react';

// Shapes
import AboutTriangle from '../assets/shapes/triangle-light-1.png';
import SmallTriangles from '../assets/shapes/triangle-dark-3.png';

export default function About() {
    return (
        <div className="about">
            <h1 className="about__heading-1 heading-1">About Harry</h1>
            <div className="about__border" />

            <div className="about__description-container">
                <img src={AboutTriangle} alt="about-triangle" className="about__triangle" />
                <p className="about__paragraph-1">Harry Grant Taxidermy is a reputable and full-insured 
                    taxidermy studio catering to the quality conscious 
                    sportsman. Our clients are looking for a finely crafted, 
                    eye-catching trophy that will last a lifetime. The result
                    is a mount that will give a great sense of pride 
                    and satisfaction guaranteed.
                </p>

                <p className="about__paragraph-2">Harry Grant Taxidermy is conveniently 
                    located in Gibsonia, Pennsylvania
                </p>
                
                <img src={SmallTriangles} alt="about-small-triangles" className="about__small-triangles" />
            </div>

            <div className="about__headshot">
                <h1 className="heading-3">HEADSHOT</h1>
            </div>
        </div>
    )
}
