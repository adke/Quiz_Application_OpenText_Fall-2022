import questionStyles from '../styles/AddQ.module.css'
import { useState } from 'react'
import axios from 'axios'

function AddQuestions() {

    // QuizName and Subject
    const [quizName, setQuizName] = useState();
    const [subject, setSubject] = useState();
    
    // Handle Submit Function ============================================================================
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newQuiz = {
            "quizName": quizName,
            "subject": subject,
            "questions": [{"answers": [Questions]}]
        };

        console.log("Quiz: ", newQuiz);

        // Send data to Server
        try {
            const { data } = await axios({
                url: "/api/quizadd",
                method: "POST",
                data: newQuiz
            });
            console.log("Response from POST: ", data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    
    // QUESTIONS STATE ====================================================================================
    const [Questions, setQuestions] = useState([
        { Question: '', 
          answers:[
            {Answer: '', isCorrect: true}, 
            {AnswerContent1: '', isCorrect: false}, 
            {AnswerContent2: '', isCorrect: false}, 
            {AnswerContent3: '', isCorrect: false}
            ]
        },
    ])

    // handle Functions ===================================================================================
    const handleChangeInput = (index, event) => {
        const values = [...Questions];
        values[index][event.target.name] = event.target.value;
        setQuestions(values);
    }

    const handleAddFields = () => {
        setQuestions([...Questions, { Question: '', Answer: '', AnswerContent1: '', AnswerContent2: '', AnswerContent3: '' }]);
    }

    const handleRemoveFields = (index) => {
        const values = [...Questions];
        values.splice(index, 1);
        setQuestions(values);
    }
    
    // Page Structure =======================================================================================
    return (
        <div className={questionStyles.addq}>
            
            <div>
                <label>Instructions:</label>
                <p>Input the number of questions below and click "Add Questions". Then input the correct answer in the green box and the incorrect answers in the red box.</p>
            </div>
            
            <label>Quiz Name:</label>
            <input type='text' placeholder='Name' onChange={({ target }) => setQuizName( target?.value )} value={quizName}/>
            
            <br />
            <label>Subject:</label>
            <input type='text' placeholder='Subject' onChange={({ target }) => setSubject( target?.value )} value={subject}/>
            
            <br />
            <label>Input Questions Below:</label>
            
            
            <form id='form' onSubmit={handleSubmit}>
                { Questions.map((inputField, index) => (
                    <div key={ index }>
                        <input type='text' name='Question' onChange={event => handleChangeInput(index, event)} value={ inputField.Question } onClick={handleSubmit} placeholder='Question'/>
                        <input type='text' name='Answer' onChange={event => handleChangeInput(index, event)} value={ inputField.Answer } onClick={handleSubmit} placeholder='Answer'/>

                        <input type='text' name='AnswerContent1' onChange={event => handleChangeInput(index, event)} value={ inputField.AnswerContent1 } onClick={handleSubmit} placeholder='Incorrect Answer'/>
                        <input type='text' name='AnswerContent2' onChange={event => handleChangeInput(index, event)} value={ inputField.AnswerContent2 } onClick={handleSubmit} placeholder='Incorrect Answer'/>
                        <input type='text' name='AnswerContent3' onChange={event => handleChangeInput(index, event)} value={ inputField.AnswerContent3 } onClick={handleSubmit} placeholder='Incorrect Answer'/>
                        <button className="btn btn-outline-primary" onClick={() => handleRemoveFields(index)}>-</button>
                        <button className="btn btn-outline-primary" onClick={() => handleAddFields()}>+</button>
                    </div>
                ))}
                <div>
                    <br />
                    <button type='submit' onClick={handleSubmit} className="btn btn-outline-primary">Submit</button>
                </div>
            </form>
    
        </div>
    )
}

export default AddQuestions;