import React from "react";
import basicKnife from "./basic_knife.jpeg";
import PropTypes from "prop-types";
import { Knife } from "./Knife";

export class KnifeLibrary extends React.Component {

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
