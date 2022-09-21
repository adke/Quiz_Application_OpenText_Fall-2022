import styles from '../../styles/TakeQuiz.module.css'
import React from 'react'

const Answersheet = ({data:{answers}}) => {

  // console.log('PROPS FOR ANSWER.JS', props.answer[1].answerContent)

/*         let dap = Object.keys(props.answer).map((questionAnswers) => (
/*         <h3 
          key={questionAnswers}
          onClick={ () => props.checkAnswer(questionAnswers)}>
            {props.answer[questionAnswers]}
        </h3> */
        // )); */

  console.log(answers)


  return (
      <div className={styles.answerFormat}>
        <div className={styles.buttonFormat}>
          <button className={styles.button18}>{answers[0].answerContent}</button>
        </div>

        <div className={styles.buttonFormat}>
          <button className={styles.button18}>{answers[1].answerContent}</button>
        </div>

        <div className={styles.buttonFormat}>
          <button className={styles.button18}>{answers[2].answerContent}</button>
        </div>

        <div className={styles.buttonFormat}>
          <button className={styles.button18}>{answers[3].answerContent}</button>
        </div>      

      </div>    
  )
}

export default Answersheet;
