import React, { useEffect, useRef } from 'react';
import './../../styles.css';
import { Container } from 'react-bootstrap';
import { skills } from '../../data';

function AboutMe() {
    const progressBarRefs = useRef([]);

    useEffect(() => {
        progressBarRefs.current.forEach((progressBar) => {
            const percent = progressBar.dataset.percent;
            progressBar.style.width = `${percent}%`;
        });
    }, []);
    return (
        <div id="about">
            <Container>
                <section className="aboutme">
                    <h1 className="aboutme-title">O mně</h1>
                    <p className="aboutme-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum ligula, congue nec quam a, fermentum consectetur tortor. Sed interdum laoreet viverra. Donec leo lorem, ullamcorper et eleifend a, interdum eu ex. Aliquam nec leo commodo, feugiat purus vel, hendrerit tortor. Nunc vel mauris vulputate diam maximus vulputate.</p>
                </section>
                <section className="skills">
                    <h1 className="skills-title">Mé skilly</h1>
                    <div className="skill-bar">
                        <div className="skill">
                            <span className="skill-name">HTML:</span>
                            <span className="skill-percent">{skills.html}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skills.html }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-name">CSS:</span>
                            <span className="skill-percent">{skills.css}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skills.css }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-name">SQL:</span>
                            <span className="skill-percent">{skills.sql}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skills.sql }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-name">React:</span>
                            <span className="skill-percent">{skills.react}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skills.react }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-name">C#:</span>
                            <span className="skill-percent">{skills.csharp}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skills.csharp }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-name">PHP:</span>
                            <span className="skill-percent">{skills.php}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skills.php }}></div>
                            </div>
                        </div>



                    </div>
                </section>
                <section className="feedback">
                    <h1 className="feedback-title">Reference</h1>
                    <div className="first-feedback">
                        <div className="feedback-img"></div>
                        <div className="feedback-description">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum ligula, congue nec quam a, fermentum consectetur tortor.</p>
                        </div>
                    </div>
                    <div className="first-feedback">
                        <div className="feedback-img"></div>
                        <div className="feedback-description">
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum ligula, congue nec quam a, fermentum consectetur tortor.</p>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default AboutMe;
