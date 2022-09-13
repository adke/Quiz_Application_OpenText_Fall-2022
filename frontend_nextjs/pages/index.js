import Head from 'next/head'

export default function Home() {
  return (
    // Everything has to be within this PARENT div
    <div>
      <Head>
        <title>Quizzer</title>
        <meta name='keywords' content='web development, fullstack, nextjs, springboot' />
      </Head>

      <h1>Quizzer App</h1>
    </div>
  )
}
