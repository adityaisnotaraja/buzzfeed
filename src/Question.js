import React, { Component } from 'react';
import AnswerTile from './AnswerTile';

import './Question.css';

class Question extends Component {
    static defaultProps = { bgColor: "yellow", numOptions: 4 };
    constructor(props) {
        super(props);
        this.state = { options: Array(this.props.numOptions).fill(false) };
        this.onOptionSelected = this.onOptionSelected.bind(this);
        this.defaultErrors = [
            "Something went wrong. Try again?",
            "Weird. We couldn't register your answer.",
            "This really annoying, isn't it?",
            "Don't blame the coder. Blame yourself and try again",
            "Haa! it's almost like it's rigged... by fate."
        ];
    }

    onOptionSelected(index) {
        const updatedOptions = Array(this.props.numOptions).fill(false);
        if (this.props.qIndex === 5 && index != 3) {
            const length = this.defaultErrors.length;

            const message = this.defaultErrors[Math.floor(Math.random() * length)];
            alert("Fatal Error! " + message);
        } else {
            updatedOptions[index] = true;
            this.setState({
                options: updatedOptions
            });
            this.props.onQuesAnswered(this.props.qIndex, index);
        }
    }

    render() {
        const answerTiles = this.props.options.map((o, i) =>
            <AnswerTile answerIndex={i}
                selected={this.state.options[i]}
                bgColor={this.props.bgColor}
                answerText={this.props.options[i]}
                quizCompleted={this.props.quizCompleted}
                handleClick={this.onOptionSelected} />)
        return (
            <div className="question-box">
                <div className="question" style={{ backgroundColor: this.props.bgColor }}>
                    {this.props.question}
                </div>
                {answerTiles}
            </div>
        );
    }
}

export default Question; 