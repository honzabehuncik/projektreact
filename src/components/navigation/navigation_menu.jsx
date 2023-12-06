import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationMenu() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-text">Honza Běhunčík</span>
            </div>
            <div className="links">
                <a href="#about">O mně</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Kontakt</a>
            </div>
        </nav>
    );
}

export default NavigationMenu;
