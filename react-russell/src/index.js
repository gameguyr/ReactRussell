import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

import russMonstaForgeLogo from "./forging.jpeg";
import bowieKnifeImage from "./bowie_knife.jpeg"
import kukriKnifeImage from "./kukri_knife.jpeg"
import tantoKnifeImage from "./tanto_knife.jpeg"
import basicKnife from "./basic_knife.jpeg"





import Image from "react-bootstrap/Image";

let knifeList = [
    {"name": "Bowie", "point": "clip point", "origin": "United States of America", "image": bowieKnifeImage},
    {"name": "Kukri", "point": "drop point", "origin": "Indian Sub-Continent", "image": kukriKnifeImage},
    {"name": "Tanto", "point": "Tanto point", "origin": "Japan", "image": tantoKnifeImage},
    {}
]

// let knifeList = {}
// this was for testing to see if the propTypes was working correctly, can see on console

const russ_image_style = {
    resizeMode: "cover",
    minWidth: "330px",
    width: "10vw"
};
const Knife = ({name = "Basic Knife", point = "Standard", origin = "Unknown", freeKnife=true, image = basicKnife}) => {
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

// defaultProps =

class KnifeLibrary extends React.Component {

    static defaultProps = {
        knives: [{"name": "Basic Knife", "point": "Standard", "origin":"Unknown", "freeKnife": true, "image": basicKnife}]
    }

    state = {
        is_open: true,
        freeKnife: true


    }

    toggleOpenClosed = () => {
        this.setState((prevState) => ({
            is_open: !prevState.is_open
        }))
    }

    render() {
        const { knives } = this.props
        console.log(this.state.is_open);
        return (

            <div>
                <h1>The KnifeLibrary is: {this.state.is_open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change State</button>
                {knives.map(
                    (knife, i) => <Knife
                        key={i}
                        name={knife.name}
                        point={knife.point}
                        origin={knife.origin}
                        freeKnife={this.state.freeKnife}
                        image={knife.image}
                    />
                )}
            </div>
        )
    }
}

KnifeLibrary.propTypes = {
    knives: PropTypes.array
}

Knife.propTypes = {
    name: PropTypes.string,
    point: PropTypes.string,
    origin: PropTypes.string,
    freeKnife: PropTypes.bool
}


ReactDOM.render(
    <KnifeLibrary knives={knifeList}/>,
    // <KnifeLibrary />,
  document.getElementById('root')
);

