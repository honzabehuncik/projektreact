import React from 'react';

function NavigationMenu() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-text">Honza Běhunčík</span>
            </div>
            <div className="links">
                <a onClick={() => scrollToSection('about')}>O mně</a>
                <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
                <a onClick={() => scrollToSection('contact')}>Kontakt</a>
            </div>
        </nav>
    );
}

export default NavigationMenu;
