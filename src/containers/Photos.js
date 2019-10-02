import React, { Component } from 'react';

// Components
import Backdrop from '../components/Backdrop';

// Photos
import Photo1 from '../assets/photos/whitetail-1-harry-grant-taxidermy.png';
import Photo2 from '../assets/photos/whitetail-2-harry-grant-taxidermy.png';
import Photo3 from '../assets/photos/whitetail-5-harry-grant-taxidermy.png';
import Photo4 from '../assets/photos/whitetail-6-harry-grant-taxidermy.png';
import Photo5 from '../assets/photos/whitetail-3-harry-grant-taxidermy.png';
import Photo6 from '../assets/photos/whitetail-4-harry-grant-taxidermy.png';
import Photo7 from '../assets/photos/antelope-1-harry-grant-taxidermy.png';
import Photo8 from '../assets/photos/oribi-1-harry-grant-taxidermy.png';
import Photo9 from '../assets/photos/blesbok-1-harry-grant-taxidermy.png';
import Photo10 from '../assets/photos/rainbow-trout-1-harry-grant-taxidermy.png';
import Photo11 from '../assets/photos/black-bear-1-harry-grant-taxidermy.png';
import Photo12 from '../assets/photos/largemouth-bass-1-harry-grant-taxidermy.png';

// Shapes
import { ReactComponent as RightArrow } from '../assets/svgs/circle-right.svg';
import { ReactComponent as LeftArrow } from '../assets/svgs/circle-left.svg';
import { ReactComponent as CloseButton } from '../assets/svgs/cross.svg';

export default class Photos extends Component {
    state = {
        photoSelected: false,
        index: 0,
        photos: [
            Photo1,
            Photo2,
            Photo3,
            Photo4,
            Photo5,
            Photo6,
            Photo7,
            Photo8,
            Photo9,
            Photo10,
            Photo11,
            Photo12,
        ]
    }


    onSelectPhoto = (index) => {
        this.setState({
            ...this.state,
            photoSelected: !this.state.photoSelected,
            index: index,
        })
    }

    onMoveLeft = () => {
        if (this.state.index === 0) {
            this.setState({
                ...this.state,
                index: 11,
            })
        } else {
            this.setState({
                ...this.state,
                index: this.state.index - 1,
            })
        }
    }

    onMoveRight = () => {
        if (this.state.index === 11) {
            this.setState({
                ...this.state,
                index: 0,
            })
        } else {
            this.setState({
                ...this.state,
                index: this.state.index + 1,
            })
        }
    }

    render() {
        return (
            <div className="photos">
                <h1 className="photos__heading-1 heading-1">Photos</h1>
                <div className="photos__border" />
                <p className="photos__paragraph-1">Our goal is to provide you with a truly lifelike, anatomically correct mounts</p>

                <div className="photos__photos-container">
                    <img onClick={this.onSelectPhoto.bind(this, 0)} src={this.state.photos[0]} alt="animal-1" className="photos__photo photos__photo--1" />
                    <img onClick={this.onSelectPhoto.bind(this, 1)} src={Photo2} alt="animal-1" className="photos__photo photos__photo--2" />
                    <img onClick={this.onSelectPhoto.bind(this, 2)} src={Photo3} alt="animal-1" className="photos__photo photos__photo--3" />

                    <img onClick={this.onSelectPhoto.bind(this, 3)} src={Photo4} alt="animal-1" className="photos__photo photos__photo--4" />
                    <img onClick={this.onSelectPhoto.bind(this, 4)} src={Photo5} alt="animal-1" className="photos__photo photos__photo--5" />
                    <img onClick={this.onSelectPhoto.bind(this, 5)} src={Photo6} alt="animal-1" className="photos__photo photos__photo--6" />

                    <img onClick={this.onSelectPhoto.bind(this, 6)} src={Photo7} alt="animal-1" className="photos__photo photos__photo--7" />
                    <img onClick={this.onSelectPhoto.bind(this, 7)} src={Photo8} alt="animal-1" className="photos__photo photos__photo--8" />
                    <img onClick={this.onSelectPhoto.bind(this, 8)} src={Photo9} alt="animal-1" className="photos__photo photos__photo--9" />

                    <img onClick={this.onSelectPhoto.bind(this, 9)} src={Photo10} alt="animal-1" className="photos__photo photos__photo--10" />
                    <img onClick={this.onSelectPhoto.bind(this, 10)} src={Photo11} alt="animal-1" className="photos__photo photos__photo--11" />
                    <img onClick={this.onSelectPhoto.bind(this, 11)} src={Photo12} alt="animal-1" className="photos__photo photos__photo--12" />
                </div>
                {this.state.photoSelected 
                    && <div className="photos__selected">
                        <img 
                            src={this.state.photos[this.state.index]} 
                            alt="selected-animal"
                            className="photos__selected-photo"
                        />
                        <CloseButton className="photos__close" onClick={this.onSelectPhoto} />
                        <LeftArrow className="photos__left-arrow" onClick={this.onMoveLeft} />
                        <RightArrow className="photos__right-arrow" onClick={this.onMoveRight} />
                    </div>
                }
                {this.state.photoSelected && <div onClick={this.onSelectPhoto} ><Backdrop /></div>}
                <a
                    className="photos__facebook"
                    href="https://www.facebook.com/Harry-Grant-Taxidermy-182137311855321/"
                    target="_blank" rel="noopener noreferrer"
                >
                    <p>CHECK OUT MORE PHOTOS ON FACEBOOK</p>
                </a>
            </div>
        )
    }
}