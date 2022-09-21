import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection'
import QuizCard from '../components/QuizCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Home() {

  const [dataset, setDataset] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8080/quizzes/getAllQuiz")
      .then((res) => res.json())
      .then((data) => {
        setDataset(data.questions)
      })
  })

  return (
    <>
      <div>
        <Nav />
        <div className="secondary-main">
          <h1 className={styles.title}>Homepage</h1>
          <h2 className={styles.leftmargin}>Welcome to Quizzer!</h2>
          <p className={styles.leftmargin}>Please choose one of the following:</p>
          <QuizCard />
          <h4 className={styles.leftmargin}>To learn more about the game, please navigate to the following:</h4>
          <div className="bootstrapbuttons">
            <Link href='about'>
              <button type="button" class="btn btn-outline-primary">Learn More</button>
            </Link>
          </div>
          <h4 className={styles.leftmargin}>Otherwise, it's time to have some fun!</h4>
          <h2 className={styles.leftmargin}>Quizzes</h2>
          <MainSection />
          <h4 className={styles.leftmargin}>Or</h4>
           <p className={styles.leftmargin}>Please choose one of the following:</p>
        </div>
      </div>
    </>
  )
}
