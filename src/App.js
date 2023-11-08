import {useState} from "react";
import './App.css';
import NavigationMenu from "./components/navigation_menu";
import Portfolio from "./pages/portfolio";
import Carousel from "./components/carousel";

function App() {
    return (
        <NavigationMenu></NavigationMenu>,
        <Portfolio></Portfolio>,
            <Carousel></Carousel>
    );
}

export default App;
