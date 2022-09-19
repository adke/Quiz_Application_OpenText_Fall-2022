import styles from '../styles/Card.module.css'

function QuizCard({ }) {
    return (
        <div className='cardformat'>
            <div className={styles.card}>
                <div className={styles.container}>
                    <h4><b>Quiz XXX1</b></h4>
                    <p>Subject</p>
                </div>
            </div>
            <div className={styles.card}>
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
            </div>
        </div>
    );
}

export default QuizCard;
