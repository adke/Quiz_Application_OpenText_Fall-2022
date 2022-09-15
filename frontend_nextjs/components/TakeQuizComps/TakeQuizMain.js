import styles from '../../styles/Takequiz.module.css'
import React, { Component } from 'react'
import Question from './Question';
import Answer from './Answer'

export default class TakeQuizMain extends Component {
  
     // initiating the local state
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

    render() {
        const { questions, answers, step } = this.state;

        return (
            <div className='question-format'>
                <div className='card-format'>
                    <h2>Quiz: </h2>
                    <div className='card-format'>
                        <div className={styles.card}>
                            <div className={styles.container}>
                                <h4><b>{this.state.dates[step]}</b></h4> 
                                <h4><Question question={this.state.questions[step]} /></h4> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='answer-format'>
                    <Answer 
                        answer={answers[step]}
                        step={step}
                    />
                </div>
            </div>
        )
    }
}


