import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import TakeQuizMain from '../components/TakeQuizComps/TakeQuizMain'
import Answer from '../components/TakeQuizComps/Answer'
import styles from '../styles/TakeQuiz.module.css'
// import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://api.npoint.io/5fc066b1e4add3f854d4");
  const data = await res.json();

  return {
    props: {quizData: data}
  }
}

export default function Takequiz({quizData}) {

  console.log(quizData)

  return (
    <div>
      <Head>
        <title>Quizzler</title>
      </Head>
      <Nav />
      <div className={styles.questionFormat}>
        <TakeQuizMain />
      </div>    
    </div>
  )
}

