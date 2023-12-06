import {useState} from "react";
import './App.css';
import './styles.css';
import NavigationMenu from "./components/navigation/navigation_menu";
import Homepage from "./components/pages/homepage";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Container>
                <NavigationMenu></NavigationMenu>
                <div className="background-effects"></div>
                <Homepage></Homepage>
            </Container>
        </div>
    );
}

export default App;
