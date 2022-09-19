import styles from '../../styles/TakeQuiz.module.css'
import React from 'react'

const Answer = (props) => {

  let dap = Object.keys(props.answer)
    .map((questionAnswers,i) => (
      <h3 
        className={
          props.correctAnswer === questionAnswers ? 'correct': 
          props.clickedAnswer === questionAnswers ? 'incorrect': ''
        }
        key={questionAnswers}
        onClick={ () => props.checkAnswer(questionAnswers)}>
          {props.answer[questionAnswers]}
      </h3>
  ));


  return (
    //<div className="bootstrapbuttons">
      <div className={styles.answerFormat}>
        <div className={styles.buttonFormat}>
          <button disabled={props.clickedAnswer ? true : false}  className={styles.button18}>{dap[0]}</button>
        </div>
        <div className={styles.buttonFormat}>
          <button disabled={props.clickedAnswer ? true : false}  className={styles.button18}>{dap[1]}</button>
        </div>
        <div className={styles.buttonFormat}>
          <button disabled={props.clickedAnswer ? true : false}  className={styles.button18}>{dap[2]}</button>
        </div>
        <div className={styles.buttonFormat}>
          <button disabled={props.clickedAnswer ? true : false}  className={styles.button18}>{dap[3]}</button>
        </div>
{/*         <div>
          {
            props.correctAnswer ? 'Correct!' : props.clickedAnswer ? 'Incorrect' : ''
          }
      </div> */}
    </div>      
  )
}

export default Answer;
