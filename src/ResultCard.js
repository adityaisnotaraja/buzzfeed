import React, { Component } from 'react';
import Sticker from './Sticker.js';
import BirthdayBoy from './BirthdayBoy.png';
import ChandlerMusab from './Chandler-Musab.png';
import MessyQueen from './MessyQueen.png';
import GirlBoss from './GirlBoss.png';

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
        const resultImg = [BirthdayBoy, ChandlerMusab, MessyQueen, GirlBoss];
        return (
            <div className="result-card">
                <div className="result-card-header">
                    <Sticker bgColor="yellow" text="QUIZ" />
                    <h1 className="result-card-title">We Know Which Snarky G-, We Mean, Musab Naqeeb You Are</h1>
                </div>
                <div className="result-card-inner">
                    <div className="result-card-inner-left">
                        <img className="result-image" src={resultImg[this.props.imgUrl]} alt="result" />
                    </div>
                    <div className="result-card-inner-right">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
                <div onClick={this.reloadPage} className="buttons-row">
                    <u>Retake</u>
                </div>
            </div>
        );
    }
}

export default ResultCard;