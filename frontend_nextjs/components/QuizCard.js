import styles from '../styles/Card.module.css'

<<<<<<< Updated upstream
function QuizCard({}){
    return(
            <div className='card-format'>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <h4><b>Quiz XXX1</b></h4> 
                        <p>2022-09-14</p> 
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <h4><b>Quiz XXX2</b></h4> 
                        <p>2022-09-15</p> 
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <h4><b>Quiz XXX3</b></h4> 
                        <p>2022-09-16</p> 
                    </div>
=======
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
>>>>>>> Stashed changes
                </div>
            </div>
    );
}

export default QuizCard;
