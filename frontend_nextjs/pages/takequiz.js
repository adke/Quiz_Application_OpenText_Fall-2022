import MainTakeQuiz from '../components/TakeQuizComps/MainTakeQuiz'
import Answersheet from '../components/TakeQuizComps/Answersheet'
import Button from 'react-bootstrap/Button'
import styles from '../styles/TakeQuiz.module.css'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Question from '../components/TakeQuizComps/Question'
// import styles from '../styles/Home.module.css'

export default function Takequiz({id}) {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [subject, setSubject] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0);


  const handleAnswer = (answerform) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(currentIndex + 1);
    setScore(score + answerform);
    }

// fetch("localhost:8080/quizzes/" + {id})

  useEffect(()=>{
    fetch("https://api.npoint.io/93c556a56820caa8324f")
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
            <div className={styles.scoreFormat}> Your score is {score} out of {questions.length}!</div>
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
                      <Button onClick={() => handleAnswer(questions[currentIndex].answers[0].isCorrect)} className={styles.button18} answerform = {answers[0].answerContent}> {answers[0].answerContent}</Button>
                    </div>

                    <div className={styles.buttonFormat}>
                      <Button onClick={() => handleAnswer(questions[currentIndex].answers[1].isCorrect)} className={styles.button18} answerform = {answers[1].answerContent}> {answers[1].answerContent}</Button>
                    </div>

                    <div className={styles.buttonFormat}>
                      <Button onClick={() => handleAnswer(questions[currentIndex].answers[2].isCorrect)} className={styles.button18} answerform = {answers[2].answerContent}> {answers[2].answerContent}</Button>
                    </div>

                    <div className={styles.buttonFormat}>
                      <Button onClick={() => handleAnswer(questions[currentIndex].answers[3].isCorrect)} className={styles.button18} answerform = {answers[3].answerContent}> {answers[3].answerContent}</Button>
                    </div>     
                  </div> 
              </div>
          )}
        </div>
    ) : (
      <h1>ERROR ARISING</h1>
    )
}
