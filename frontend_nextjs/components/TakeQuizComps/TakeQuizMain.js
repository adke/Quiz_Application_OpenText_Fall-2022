import styles from '../../styles/TakeQuiz.module.css'
import React, { Component } from 'react'
import Question from './Question';
import Answer from './Answer'
import Link from 'next/link'

export default class TakeQuizMain extends Component { 

    state = {
        questions: {
            1: 'What US city is known as the "birthplace of jazz"?',
            2: 'What is the capital of Greece?',
            3: 'What planet gave birth to Superman?'
        },
        dates:{
            1: "Question 1",
            2: "Question 2",
            3: "Question 3",
        },
        answers: {
            1: {
                1: 'Chicago',
                2: 'New Orleans',
                3: 'New York',
                4: 'Toronto',
            },
            2: {
                1: 'Athens',
                2: 'Patras',
                3: 'Kalamata',
                4: 'Rome',
            },
            3: {
                1: 'Krypton',
                2: 'Mars',
                3: 'Saturn',
                4: 'Pluto'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1',
            4: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

 /*    {
        "quiz": {
           "quizName":"Calculus",
           "subject":"Math",
           "questions": [
              {
                 "content":"What's 1 + 1",
                 "correctAnswerID":4,
                 "answers":[
                    {
                       "content":"1"
                    },
                    {
                       "content":"2"
                    },
                    {
                       "content":"3"
                    },
                    {
                       "content":"4"
                    }
                 ]
              }
           ]
        }
    }; */

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        } 
    }

    nextButtonStep = step => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }

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

