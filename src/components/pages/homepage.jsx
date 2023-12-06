import React from 'react';
import './../../styles.css';
import { Container } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation'; // Import knihovny react-type-animation

function Homepage() {
    return (
        <div>
            <Container>
                <section className="hero">
                    <div className="hero-content text-center">
                        <h1 className="hero-title display-3">Honza Běhunčík</h1>
                        <p className="hero-description lead">
                            <span className="highlighted_yellow">string</span> zamereni ={' '}
                            <span className="highlighted_green">
                <TypeAnimation // Vložení komponenty TypeAnimation
                    sequence={[
                        'Student',
                        1000,
                        'Vývojář',
                        1000,
                        'Grafik',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
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
            </Container>
        </div>
    );
}

export default Homepage;
