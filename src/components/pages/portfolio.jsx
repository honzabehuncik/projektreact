import React from 'react';
import './_portfolio_styles.css';

function Portfolio() {
    return (
        <div>
            <section id="section1">
                <h2>Sekce 1</h2>
                {/* Obsah sekce 1 */}
            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                {/* Obsah sekce 2 */}
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {/* Obsah sekce 3 */}
            </section>
            <section className="Skills">
                <h2>Dosažené Dovednosti</h2>
                <div className="Skill" title="JavaScript">
                    JavaScript
                </div>
                <div className="Skill" title="React.js">
                    React.js
                </div>
                <div className="Skill" title="CSS">
                    CSS
                </div>
                <div className="Skill" title="HTML">
                    HTML
                </div>
            </section>
        </div>

    );
}
export default Portfolio;

