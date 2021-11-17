import React, { Component } from 'react';
import Sticker from './Sticker.js';

import './ResultCard.css';

class ResultCard extends Component {
    constructor(props) {
        super(props);
        this.reloadPage = this.reloadPage.bind(this);
    }
    reloadPage() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        window.location.reload();
    }
    render() {
        return (
            <div className="result-card">
                <div className="result-card-header">
                    <Sticker bgColor="yellow" text="QUIZ" />
                    <h1 className="result-card-title">We Know Which Basic B-, We Mean, Musab Naqeeb You Are</h1>
                </div>
                <div className="result-card-inner">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <img src={this.props.imgUrl} alt="result" />
                </div>
                <div onClick={this.reloadPage} className="buttons-row">
                    <u>Retake</u>
                </div>
            </div>
        );
    }
}

export default ResultCard;