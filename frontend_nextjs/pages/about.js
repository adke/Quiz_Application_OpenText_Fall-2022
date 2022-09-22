export const getStaticProps = async () => {

    const res = await fetch('https://api.npoint.io/5fc066b1e4add3f854d4');
    const res1 = await fetch('https://api.npoint.io/df7aeec0c8d11ca01aa5');
    const data = await res.json();
    const data1 = await res1.json();


    return {
        props: { quizzes: data, quizzer: data1 }
    }

}

const content = ({ quizzes, quizzer }) => {
    console.log(quizzes, quizzer);

    return (
        <div>
            <h1>About</h1>

            {/* {quizzes.map(quiz => ( */}
            <div >
                <h2>{quizzes.subject}</h2>
                <p>{quizzes.quizName}</p>
            </div>
            {/* ))} */}

        </div>
    );

}

export default content;