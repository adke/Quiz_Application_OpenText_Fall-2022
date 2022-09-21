import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection'
import QuizCard from '../components/QuizCard'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';


export default function Home() {

  const [dataset, setDataset] = useState([])

  useEffect(() => {

    fetch("http://localhost:9090/quizzes/getAllQuiz")
      .then((res) => res.json())
      .then((data) => {
        setDataset(data)
      })
  })

  return (
    <div>
      <Head>
        <title>Quizzler</title>
      </Head>
      
      <Nav />    
      <div className="secondary-main">
        <h1 className={styles.title}>Homepage</h1>
        <h2 className={styles.leftmargin}>Welcome to Quizzer!</h2>
        <h2>Quizzes</h2>
        <QuizCard props={dataset} />
        <MainSection />
      </div>
    </div>
  )
}
