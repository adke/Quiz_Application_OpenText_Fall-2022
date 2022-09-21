import styles from '../styles/Card.module.css'

function QuizCard({numberSet}) {

    let arr = Array.from({length: numberSet.length}, (x, i) => i);
    console.log(arr, numberSet)

    {
        Object.entries(numberSet).map((quizID) => {
                return (
                    <div className='cardformat'>
                        <div className={styles.card}>
                            <div className={styles.container}>
                                <h4><b></b></h4>
                                <p>Subject</p>
                            </div>
                        </div>
                        {/* <div className={styles.card}>
                            <div className={styles.container}>
                                <h4><b>Quiz XXX2</b></h4>
                                <p>Subject</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.container}>
                                <h4><b>Quiz XXX3</b></h4>
                                <p>Subject</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.container}>
                                <h4><b>Quiz XXX4</b></h4>
                                <p>Subject</p>
                            </div>
                        </div> */}
                    </div>
                );
            }
        )
        
    }
}

export default QuizCard;
