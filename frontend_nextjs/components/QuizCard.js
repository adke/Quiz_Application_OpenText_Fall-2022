import styles from '../styles/Card.module.css'

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
                </div>
            </div>
    );
}

export default QuizCard;
