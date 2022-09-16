import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import TakeQuizMain from '../components/TakeQuizComps/TakeQuizMain'
import Answer from '../components/TakeQuizComps/Answer'
// import styles from '../styles/Home.module.css'


export default function Takequiz() {
  return (
    <div>
      <Head>
        <title>Quizzler</title>
      </Head>
      <Nav />
      <div className='question-format'>
        <TakeQuizMain />
      </div>    
    </div>
  )
}


// export async function getStaticProps () {
//   const quizData = await fetch('https://api.jsonbin.io/v3/qs/632210a9e13e6063dca7fc9b').then((res) => res.json()
//   );

//   return {
//     props: {
//       exploreData
//     }
//   }
