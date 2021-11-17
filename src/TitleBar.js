import React, { Component } from 'react';
import './TitleBar.css';
import logo from './buzzfeed-logo.svg';
import Sticker from './Sticker.js';
import arrowLogo from './BuzzFeed_Arrow.png';

class TitleBar extends Component {
    render() {
        const navItems = ["D & D", "QRC", "Drag", "Comic Con", "Pop Culture"];
        return (
            <div className="title-bar">
                <div className="title-bar-left">
                    <i className="fas fa-bars menu-button" />
                    <img src={logo} className="title-logo" alt="buzzfeed logo" />
                    <div className="menu-options">
                        {navItems.map(i => <span className="menu-item">{i}</span>)}
                    </div>
                </div>
                <div className="title-bar-right">

                    <div className="menu-options icon-options">
                        <i className="icon-option far fa-heart"></i>
                        <i className="icon-option far fa-bell"></i>
                        <i className="icon-option fas fa-search"></i>
                    </div>
                    <div className="menu-options title-sticker-row">
                        <Sticker className="title-sticker" text="OMG" />
                        <Sticker className="title-sticker" text="WIN" />
                        <img src={arrowLogo}
                            className="contributor-avatar" alt="arrow logo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleBar;