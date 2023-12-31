import React from 'react';
import './../../styles.css';
import { Container } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import {introdata, focusData } from '../../data';

function Homepage() {
    const focusSequence = [
        ...focusData.map((item, index) => [`"${item}"`, 1000]),
    ].flat();
    return (
        <div id="home">
            <Container>
                <section className="hero">
                    <div className="hero-content text-center">
                        <h1 className="hero-title display-3">{introdata.title}</h1>
                        <p className="hero-description lead">
                            <span className="highlighted_yellow">string</span> zamereni ={' '}
                            <span className="highlighted_green">
                <TypeAnimation
                    sequence={focusSequence}
                    wrapper="span"
                    speed={200}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
              </span>
                            ;
                            <br></br>
                            <span className="highlighted_purple">return</span> zamereni;
                        </p>
                    </div>
                    <div className="hero-image"></div>
                </section>

                {/*<div className="gradient-container">
                    <h1 className="animated-text">Tvojí animovaný text</h1>
                </div>*/}
            </Container>
        </div>
    );
}

export default Homepage;
