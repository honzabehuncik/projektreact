import {useState, useRef } from "react";
import './App.css';
import './styles.css';
import NavigationMenu from "./components/navigation/navigation_menu";
import Homepage from "./components/pages/homepage";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./components/pages/about_me";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Container>
                <div className="light light-1"></div>
                <div className="light light-2"></div>
                <div className="light light-3"></div>

                <NavigationMenu
                    scrollToAbout={() => scrollToSection(aboutRef)}
                ></NavigationMenu>

                <Homepage></Homepage>

                <div ref={aboutRef}>
                    <AboutMe />
                </div>
            </Container>
        </div>
    );
}

export default App;
