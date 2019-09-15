import React, { Component } from 'react';

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

// Components
import Backdrop from '../components/Backdrop';

export default class Photos extends Component {
    state = {
        photoSelected: false,
    }


    onSelectPhoto = () => {
        this.setState({
            ...this.state,
            photoSelected: !this.state.photoSelected,
        })
    }

    render() {
        return (
            <div className="photos">
                <h1 className="photos__heading-1 heading-1">Photos</h1>
                <div className="photos__border" />
                <p className="photos__paragraph-1">Our goal is to provide you with a truly lifelike, anatomically correct mounts</p>

                <div className="photos__photos-container">
                    <img onClick={this.onSelectPhoto} src={Photo1} alt="animal-1" className="photos__photo photos__photo--1" />
                    <img onClick={this.onSelectPhoto} src={Photo2} alt="animal-1" className="photos__photo photos__photo--2" />
                    <img src={Photo3} alt="animal-1" className="photos__photo photos__photo--3" />

                    <img onClick={this.onSelectPhoto} src={Photo4} alt="animal-1" className="photos__photo photos__photo--4" />
                    <img onClick={this.onSelectPhoto} src={Photo5} alt="animal-1" className="photos__photo photos__photo--5" />
                    <img onClick={this.onSelectPhoto} src={Photo6} alt="animal-1" className="photos__photo photos__photo--6" />

                    <img onClick={this.onSelectPhoto} src={Photo7} alt="animal-1" className="photos__photo photos__photo--7" />
                    <img onClick={this.onSelectPhoto} src={Photo8} alt="animal-1" className="photos__photo photos__photo--8" />
                    <img src={Photo9} alt="animal-1" className="photos__photo photos__photo--9" />

                    <img onClick={this.onSelectPhoto} src={Photo10} alt="animal-1" className="photos__photo photos__photo--10" />
                    <img onClick={this.onSelectPhoto} src={Photo11} alt="animal-1" className="photos__photo photos__photo--11" />
                    <img onClick={this.onSelectPhoto} src={Photo12} alt="animal-1" className="photos__photo photos__photo--12" />
                </div>
                {this.state.photoSelected && <img src={Photo1} alt="selected-animal" className="photos__selected" />}
                {this.state.photoSelected && <div onClick={this.onSelectPhoto} ><Backdrop /></div>}
                <p className="photos__facebook">CHECK OUT MORE PHOTOS ON FACEBOOK</p>
            </div>
        )
    }
}