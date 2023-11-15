import {useState} from "react";
import './App.css';
import NavigationMenu from "./components/navigation/navigation_menu";
import Portfolio from "./components/pages/portfolio";
import Carousel from "./components/carousel/carousel";

function App() {
    return (
        <NavigationMenu></NavigationMenu>,
        <Portfolio></Portfolio>,
            <Carousel></Carousel>
    );
}

export default App;
