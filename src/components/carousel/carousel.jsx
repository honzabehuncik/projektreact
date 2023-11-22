import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './_carousel_styles.css';

const images = [
    'img_1.jpg',
    'img_2.jpg',
    'img_3.jpg',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div classname="carousel">
            <a className="button" onClick={nextSlide} href="#" style={{'--color': '#ff1867'}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Předchozí
            </a>
            <transitiongroup classname="carousel-slide">
                <csstransition key="{index}" timeout="{500}" classnames="slide">
                    <img src={images[index]} alt={`Slide ${index + 1}   `} />
                </csstransition>
            </transitiongroup>
            <a className="button" onClick={prevSlide} href="#" style={{'--color': '#ff1867'}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Další
            </a>
        </div>

    );
}

export default Carousel;