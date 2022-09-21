import styles from '../../styles/TakeQuiz.module.css'
import React, { Component } from 'react'
import Question from './Question';
import Answer from './Answersheet'
import Link from 'next/link'

export default class TakeQuizMain extends Component { 


    // checkAnswer = answer => {
    //     const { correctAnswers, step, score } = this.state;
    //     if (answer === correctAnswers[step]){
    //         this.setState({
    //             score: score + 1,
    //             correctAnswer: correctAnswers[step],
    //             clickedAnswer: answer
    //         });
    //     } else {
    //         this.setState({
    //             correctAnswer: 0,
    //             clickedAnswer: answer
    //         });
    //     } 
    // }

    // nextButtonStep = step => {
    //     this.setState({
    //         step: step + 1,
    //         correctAnswer: 0,
    //         clickedAnswer: 0
    //     })
    // }

    render() {
        const { questions, answers, step, correctAnswer, clickedAnswer, score } = this.state;

        return (
            <div className={styles.questionFormat}>
                {step <= Object.keys(questions).length ? (<>
                <div className={styles.cardFormat}>
                        <h2>Quiz: </h2>
                    <div className={styles.cardFormat}>
                        <div className={styles.card}>
                            <div className={styles.container}>
                                <h4><b>{this.state.dates[step]}</b></h4> 
                                <h4>
                                    <Question question={this.state.questions[step]} /></h4> 
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.answerFormat}>
                        <Answer 
                            questions = {questions[step]}
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <div className={styles.nextButtonFormat}>
                            <div className="bootstrapbuttons">
                                <button 
                                    type="button" class="btn btn-outline-primary"
                                    disabled={clickedAnswer && Object.keys(questions).length >= step ? false : true }
                                    onClick={() => this.nextButtonStep(step)}
                                    >
                                        Next
                                </button>
                            </div>
                        </div>    
                    </div>
                </>) : (
                    <div className={styles.scorepage}>
                        <h4>
                            You have completed the quiz!
                        </h4>
                        <h4>You got {score} of {Object.keys(questions).length}</h4>
                        <div className="bootstrapbuttons">
                            <Link href='/'>
                            <button type="button" class="btn btn-outline-primary">Go Back Home</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>  
        )
    }
}

