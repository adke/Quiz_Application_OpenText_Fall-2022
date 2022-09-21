import React from 'react'
import styles from '../../styles/TakeQuiz.module.css'

const Question = ( {data: {questions}} ) => {
  return (
    <div>{questions?.questionContent}</div>
  )
}

export default Question;