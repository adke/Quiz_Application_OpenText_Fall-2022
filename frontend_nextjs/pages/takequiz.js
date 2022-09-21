import MainTakeQuiz from '../components/TakeQuizComps/MainTakeQuiz'
import Answersheet from '../components/TakeQuizComps/Answersheet'
import Button from 'react-bootstrap/Button'
import styles from '../styles/TakeQuiz.module.css'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Question from '../components/TakeQuizComps/Question'
// import styles from '../styles/Home.module.css'

export default function Takequiz({}) {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [subject, setSubject] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0);


  const handleAnswer = (answers) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(currentIndex + 1);
    if (answers === questions[currentIndex].isCorrect == "true"){
      setScore(score + 1);
    }
  }

  // console.log(questions[0]?.answers[3].isCorrect)

  useEffect(()=>{
    fetch("https://api.npoint.io/f6fbd3488bd7f52d40d9 ")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions)
        setSubject(data.subject)
        setAnswers(data.questions[currentIndex]?.answers)
      })
  })

  return questions.length > 0 ? (
      <div>
        <Nav />
          {currentIndex >= questions.length ? (
            <div className={styles.scoreFormat}> Your score is {score}!</div>
          ) : (
              <div className={styles.questionFormat}>
                  <div className={styles.cardFormat}>
                            <h2>Quiz: </h2>
                          <div className={styles.cardFormat}>
                              <div className={styles.card}>
                                  <div className={styles.container}>
                                      <h4 className={styles.questiontitle}>
                                          <b>{subject}</b>
                                      </h4>
                                      <h4 className={styles.questiontitle}> {/* Quiz title inserts here */}
                                          {/* <Question question={props.props.questions[step].questionContent}/> */}
                                          {questions[currentIndex]?.questionContent}
                                      </h4> 
                                  </div>
                              </div>
                          </div>
                  </div>
                  <div className={styles.answerFormat}>
                    <div className={styles.buttonFormat}>
                      <Button onClick={(e) => handleAnswer(true)} className={styles.button18} answers = {answers[0].answerContent}> {answers[0].answerContent}</Button>
                    </div>

                    <div className={styles.buttonFormat}>
                      <Button onClick={(e) => handleAnswer(false)} className={styles.button18} answers = {answers[1].answerContent}> {answers[1].answerContent}</Button>
                    </div>

                    <div className={styles.buttonFormat}>
                      <Button onClick={(e) => handleAnswer(false)} className={styles.button18} answers = {answers[2].answerContent}> {answers[2].answerContent}</Button>
                    </div>

                    <div className={styles.buttonFormat}>
                      <Button onClick={(e) => handleAnswer(false)} className={styles.button18} answers = {answers[3].answerContent}> {answers[3].answerContent}</Button>
                    </div>      
                  </div> 
              </div>
          )}
        </div>
    ) : (
      <h1>ERROR ARISING</h1>
    )
}
