import Head from 'next/head'
import Nav from '../components/Nav'
import AddQuestions from '../components/AddQuestions'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'


export default function Addquiz() {
  return (
    <div>
      <Head>
        <title>Quizzer</title>
      </Head>
      <Nav />
      <div className='secondary-main'>
        <AddQuestions /> 
      </div>
      
    </div>
  )
}
