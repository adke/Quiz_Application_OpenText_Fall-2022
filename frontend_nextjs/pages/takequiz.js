import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import TakeQuizMain from '../components/TakeQuizComps/TakeQuizMain'
import Answer from '../components/TakeQuizComps/Answer'
import styles from '../styles/TakeQuiz.module.css'
// import styles from '../styles/Home.module.css'


export default function Takequiz() {
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

