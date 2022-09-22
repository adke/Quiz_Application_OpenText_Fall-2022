import styles from '../../styles/TakeQuiz.module.css'
import React, { Component } from 'react'
import axios from 'axios'
import Question from './Question';
import Answer from './Answersheet'

export default function MainTakeQuiz(props) {

    // console.log('props ANSWER CORRECT', props.props.questions[1].answers[1].answerContent)

    const step = 0;


    return (
        <div className={styles.questionFormat}>
            <div className={styles.cardFormat}>
                            <h2>Quiz: </h2>
                    <div className={styles.cardFormat}>
                        <div className={styles.card}>
                            <div className={styles.container}>
                                <h4 className={styles.questiontitle}>
                                    {/* Quiz name inserts here */}
                                    <b>{props.props.quizName}</b>
                                </h4>
                                <h4 className={styles.questiontitle}> {/* Quiz title inserts here */}
                                    <Question question={props.props.questions[step].questionContent}/> {/* Quiz questions inserts here */}
                                </h4> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.answerFormat}>
                        <Answer 
                            answer={props.props.questions[step].answers}
                        />
            </div>
        </div>
    )
}