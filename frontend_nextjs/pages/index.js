import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection'
import QuizCard from '../components/QuizCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quizzler</title>
      </Head>
      
      <Nav />    
      <MainSection />
      <h2>Quizzes</h2>
      <QuizCard />
    </div>
  )
}
