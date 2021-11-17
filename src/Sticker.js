import React, { Component } from 'react';
import './Sticker.css';

class Sticker extends Component {
    static defaultProps = { bgColor: "rgb(255, 238, 0)", text: "OMG" };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sticker" style={{ backgroundColor: this.props.bgColor }}>
                {this.props.text}
            </div>
        );
    }
}

export default Sticker;