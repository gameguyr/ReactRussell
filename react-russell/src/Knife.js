import basicKnife from "./basic_knife.jpeg";
import Image from "react-bootstrap/Image";
import React from "react";
import PropTypes from "prop-types";

export const Knife = ({name = "Basic Knife", point = "Standard", origin = "Unknown", freeKnife=true, image = basicKnife}) => {
    // getKnifeImage = (Knife) => ()



    return (
        <section>
            <h2>{name}</h2>
            <p>type of point: {point}</p>
            <p>country of origin: {origin}</p>
            <p>Free Knife Today: {freeKnife ? 'yes!' : 'no!'}</p>
            {/*<button onClick={getKnifeImage}>Get Knife Image</button>*/}
            <Image src={image} style={russ_image_style} />
        </section>
    )
}

Knife.propTypes = {
    name: PropTypes.string,
    point: PropTypes.string,
    origin: PropTypes.string,
    freeKnife: PropTypes.bool
}

const russ_image_style = {
    resizeMode: "cover",
    minWidth: "330px",
    width: "10vw"
};