import React, { Component } from 'react';
import './Quiz.css';
import Question from './Question.js';
import QuestionsLog from './QuestionsLog.js';
import Results from './Results.js';
import ResultCard from './ResultCard.js';
import Sticker from './Sticker.js';
import vAd from './admusab.png';
import goodReadsAd from './goodreadsad.png';

class Quiz extends Component {
    static defaultProps = { numQ: 6 };
    constructor(props) {
        super(props);
        this.resCount = new Map();
        this.state = { questions: Array(this.props.numQ).fill(null), quizCompleted: false, result: null };
        this.onQuesAnswered = this.onQuesAnswered.bind(this);
        this.goToGoodReads = this.goToGoodReads.bind(this);
        this.goToInsta = this.goToInsta.bind(this);
    }

    onQuesAnswered(qIndex, oIndex) {
        this.setState(st => ({
            questions: [
                ...st.questions.slice(0, qIndex),
                oIndex,
                ...st.questions.slice(qIndex + 1)
            ]
        }), this.showResults);
    }
    showResults() {
        if (this.state.questions.every(q => q !== null)) {
            const resCount = this.state.questions.map((q, i) => QuestionsLog[i].results[q]);
            const resFreq = new Map();
            for (let r of resCount) resFreq.set(r, (resFreq.get(r) || 0) + 1);

            const res = [...resFreq.entries()].reduce((a, b) => a[1] > b[1] ? a : b);
            this.setState({ quizCompleted: true, result: Results[res[0]] });
        }
    }

    goToInsta() {
        console.log('in go to insta');
        window.location.replace("https://www.instagram.com/musabnaqeeb/");
    }

    goToGoodReads() {
        console.log('in go to goodreads');
        window.location.replace("https://www.goodreads.com/user/show/10256866-musab");
    }
    render() {
        const colours = ["#CC4165", "#E4734F", "#FFCE45", "#34BE82", "#2F86A6", "#6D3580"];
        const questionsHtml = QuestionsLog.map((q, i) => <Question question={q.question}
            options={q.options}
            bgColor={colours[i]}
            qIndex={i}
            quizCompleted={this.state.quizCompleted}
            onQuesAnswered={this.onQuesAnswered} />)
        return (
            <div className="quiz">
                <div className="quiz-section">
                    <div className="top-sticker">
                        <Sticker text="QUIZ" />
                    </div>
                    <div className="quiz-details"><u><b>Community</b></u> <span className="mid-dot">.</span> Posted on Nov 17, 2021</div>
                    <div className="quiz-header">
                        <h1>Queers, Which Musab Naqeeb Are You?</h1>
                        <p>There's a Basic Queer Sis in all of us.</p>
                    </div>
                    <div className="credits-line">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486871542l/3263607._SY475_.jpg"
                            className="contributor-avatar" alt="contributer avatar" />
                        <div className="credits-text">
                            <div><b><u>the QRC</u></b></div>
                            <div>Community Contributor</div>
                        </div>
                    </div>
                    {questionsHtml}
                    {this.state.quizCompleted ?
                        <ResultCard title={this.state.result.Header}
                            desc={this.state.result.Description}
                            imgUrl={this.state.result.imgSrc} /> : ''}
                </div>
                <div className="ad-section">
                    <div className="ad-title">ADVERTISEMENT</div>
                    <img onClick={this.goToInsta} src={vAd} alt="musab ad" />

                    <div className="second-ad ad-title">ADVERTISEMENT</div>
                    <img onClick={this.goToGoodReads} src={goodReadsAd} alt="musab ad" />

                    <div className="second-ad ad-title">ADVERTISEMENT</div>
                    <img onClick={this.goToInsta} src={vAd} alt="musab ad" />

                    <div className="second-ad ad-title">ADVERTISEMENT</div>
                    <img onClick={this.goToGoodReads} src={goodReadsAd} alt="musab ad" />
                </div>
            </div>
        );
    }
}

export default Quiz;