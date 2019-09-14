import React from 'react';

// Shapes
import Triangles from '../assets/shapes/triangle-light-3.png';

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h1 className="testimonials__heading-1 heading-1">Testimonials</h1>
            <div className="testimonials__border" />
            <p className="testimonials__paragraph-1">Thank you to all of our happy customers</p>

            <div className="testimonials__container">
                <p className="testimonials__testimonial-1">“Beautiful work, fast turn around, and very reasonably priced. Harry is a
                    true professional and great to work with. I’ll recommend him to everyone.”
                </p>
                <p className="testimonials__name-1">- Greg Martin</p>
                <img src={Triangles} alt="triangles" className="testimonials__triangles" />

                <p className="testimonials__testimonial-2">“I have had Harry do three mounts for me. All have been both done
                    timely and are works of art. I would trust Harry with my most prized
                    trophy. I had him do my son’s first deer. I just shot another 8 point
                    biggest to this point and am about to leave to take it to Harry now.”
                </p>
                <p className="testimonials__name-2">- Tony Wright</p>
                <img src={Triangles} alt="triangles" className="testimonials__triangles" />
            </div>
        </div>
    )
}
