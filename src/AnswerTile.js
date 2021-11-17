import React, { Component } from 'react';
import './Question.css';

class AnswerTile extends Component {
    static defaultProps = { bgColor: "green", option: 0 };
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (!this.props.quizCompleted) {
            this.props.handleClick(this.props.answerIndex);
        }
    }
    render() {
        const { bgColor, answerIndex, selected } = this.props;
        return (
            <div className={`option option-${answerIndex % 2}-col ${selected && "option-not-selected"}`}
                onClick={this.handleClick}
                style={{ backgroundColor: bgColor }}>
                {this.props.answerText}
            </div>
        );
    }
}

export default AnswerTile;