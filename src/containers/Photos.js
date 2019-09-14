import React from 'react';

// Photos
import Photo1 from '../assets/photos/whitetail-1-harry-grant-taxidermy.png';
import Photo2 from '../assets/photos/whitetail-2-harry-grant-taxidermy.png';
import Photo3 from '../assets/photos/whitetail-3-harry-grant-taxidermy.png';
import Photo4 from '../assets/photos/whitetail-4-harry-grant-taxidermy.png';
import Photo5 from '../assets/photos/whitetail-5-harry-grant-taxidermy.png';
import Photo6 from '../assets/photos/whitetail-6-harry-grant-taxidermy.png';
import Photo7 from '../assets/photos/rainbow-trout-1-harry-grant-taxidermy.png';
import Photo8 from '../assets/photos/oribi-1-harry-grant-taxidermy.png';
import Photo9 from '../assets/photos/largemouth-bass-1-harry-grant-taxidermy.png';
import Photo10 from '../assets/photos/blesbok-1-harry-grant-taxidermy.png';
import Photo11 from '../assets/photos/black-bear-1-harry-grant-taxidermy.png';
import Photo12 from '../assets/photos/antelope-1-harry-grant-taxidermy.png';

export default function Photos() {
    return (
        <div className="photos">
            <h1 className="photos__heading-1 heading-1">Photos</h1>
            <div className="photos__border" />
            <p className="photos__paragraph-1">Our goal is to provide you with a truly lifelike, anatomically correct mounts</p>

            <div className="photos__photos-container">
                <img src={Photo1} alt="animal-1" className="photos__photo photos__photo--1" />
                <img src={Photo2} alt="animal-1" className="photos__photo photos__photo--2" />
                <img src={Photo3} alt="animal-1" className="photos__photo photos__photo--3" />

                <img src={Photo4} alt="animal-1" className="photos__photo photos__photo--4" />
                <img src={Photo5} alt="animal-1" className="photos__photo photos__photo--5" />
                <img src={Photo6} alt="animal-1" className="photos__photo photos__photo--6" />

                <img src={Photo7} alt="animal-1" className="photos__photo photos__photo--7" />
                <img src={Photo8} alt="animal-1" className="photos__photo photos__photo--8" />
                <img src={Photo9} alt="animal-1" className="photos__photo photos__photo--9" />

                <img src={Photo10} alt="animal-1" className="photos__photo photos__photo--10" />
                <img src={Photo11} alt="animal-1" className="photos__photo photos__photo--11" />
                <img src={Photo12} alt="animal-1" className="photos__photo photos__photo--12" />
            </div>
            <p className="photos__facebook">CHECK OUT MORE PHOTOS ON FACEBOOK</p>
        </div>
    )
}
