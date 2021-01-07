import React from 'react';
import logo from './forging.jpeg'; // Tell webpack this JS file uses this image
import Image from 'react-bootstrap/Image'

console.log(logo); // /logo.84287d09.png

function Header() {
    // Import result is the URL of your image
    return <div>
        <Image src={logo} rounded />
        <Image src={logo} roundedCircle />
        <Image src={logo} thumbnail />
    </div>;
}

export default Header;