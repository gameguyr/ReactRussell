import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import russMonstaForgeLogo from "./forging.jpeg";
import bowieKnifeImage from "./bowie_knife.jpeg"
import kukriKnifeImage from "./kukri_knife.jpeg"
import tantoKnifeImage from "./tanto_knife.jpeg"

import { KnifeLibrary } from "./KnifeLibrary"

let knifeList = [
    {"name": "Bowie", "point": "clip point", "origin": "United States of America", "image": bowieKnifeImage},
    {"name": "Kukri", "point": "drop point", "origin": "Indian Sub-Continent", "image": kukriKnifeImage},
    {"name": "Tanto", "point": "Tanto point", "origin": "Japan", "image": tantoKnifeImage},
    {}
]

// let knifeList = {}
// this was for testing to see if the propTypes was working correctly, can see on console

ReactDOM.render(
    <KnifeLibrary knives={knifeList}/>,
    // <KnifeLibrary />,
  document.getElementById('root')
);

