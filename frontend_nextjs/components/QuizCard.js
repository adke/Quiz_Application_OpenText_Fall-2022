import styles from '../styles/Card.module.css'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Router } from 'next/router';
import { useRouter } from 'next/router';
import takequiz from '../pages/takequiz';

const QuizCard = ({ props }) => {
    const router = useRouter();
    const arr = [];
    // console.log("QUIZCARD", props[0].quizName);
    for (let i = 0; i < props.length; i++) {
        arr.push(props[i].quizID);
    }
    console.log(arr);

    const HandleCards = (props) => {

    }






<<<<<<< Updated upstream
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
=======
    return (
        <div className={styles.carddiv}>
            {arr.map((quizIndex) => (
                <div onClick={() => router.push('/takequiz')} className={styles.card}>
                    <div className={styles.container}>
                        <h4>{quizIndex}</h4>

                        <p>Subject</p>
                    </div>
                </div>
            ))}
        </div>
>>>>>>> Stashed changes
    );
}

export default QuizCard;

//

//             {/* <div className={styles.card}>
//                 <div className={styles.container}>
//                     <h4><b>Quiz XXX2</b></h4>
//                     <p>Subject</p>
//                 </div>
//             </div>
//             <div className={styles.card}>
//                 <div className={styles.container}>
//                     <h4><b>Quiz XXX3</b></h4>
//                     <p>Subject</p>
//                 </div>
//             </div>
//             <div className={styles.card}>
//                 <div className={styles.container}>
//                     <h4><b>Quiz XXX4</b></h4>
//                     <p>Subject</p>
//                 </div>
//             </div> */}
//         </div>
//     );
// }

// export default QuizCard;
