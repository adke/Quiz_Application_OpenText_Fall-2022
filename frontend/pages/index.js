import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection'
import QuizCard from '../components/QuizCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quizzer</title>
      </Head>

      <div>
        <Nav />
        <h1 className={styles.title}>Homepage</h1>
        <MainSection />
        <h2 className={styles.leftmargin}>Quizzes</h2>
        <QuizCard />
      </div>
    </>
  )
}
