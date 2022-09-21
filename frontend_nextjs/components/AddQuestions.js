import questionStyles from '../styles/AddQ.module.css'
import { useState } from 'react'
import axios from 'axios'

function AddQuestions() {

    // QuizName and Subject
    const [quizName, setQuizName] = useState();
    console.log('Name: ', quizName);
    const [subject, setSubject] = useState();
    console.log('Sub: ', subject);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newQuiz = {
            "quizName": quizName,
            subject,
            Questions
        }

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

    // add questions function
    // const [questions, setQuestions] = useState([{ id: "", text: "" }]);
    // console.log('Question: ', questions);

    // const addFields = () => {
    //     var number = document.getElementById("questions").value;
    //     var form = document.getElementById("form");
        
    //     while (form.hasChildNodes()) {
    //         form.removeChild(form.lastChild);
    //     }

    //     var questions = []
    //     for (let i = 0; i < number; i++) {
    //         questions.push(i + 1);
    //     }
    //     console.log(questions)

    //     questions.map(question => (<input type='text' className = "Qinput" placeholder = "Insert Question Here" 
    //                                 onChange={({ target }) => setQuestions( target?.value )} value={question}/>));
    // }
    //     for (let i = 0; i < number; i++){
    //         // ul Element
    //         var ul = document.createElement("ul");
    //         ul.id = "ul";
    //         form.appendChild(ul);

    //         ul.appendChild(document.createTextNode("Question " + (i+1) + ":    "));
    //         // Question Input
    //         var input = document.createElement("input");
    //         input.type = "text";
    //         input.className = "Qinput";
    //         input.required = true;
    //         input.placeholder = "Insert Question Here";
    //         input.onChange = ({ target }) => setQuestion( target?.value );

    //         ul.appendChild(document.createElement("br"));
    //         ul.appendChild(input);                            // Append Question input
            
    //         ul.appendChild(document.createElement("br"));

    //         ul.appendChild(document.createTextNode("Answer:"));
    //         for (let j = 0; j < 4; j++) {
    //             var input = document.createElement("input");
    //             input.type = "text";
    //             input.required = true;
    //             if (j == 0) {
    //                 input.className = "A_right_input";
    //             } else {
    //                 input.className = "A_wrong_input";
    //             }
            
    //             ul.appendChild(document.createElement("br"));
    //             ul.appendChild(input);                          // Answer input
    //         }
    //         ul.appendChild(document.createElement("br"));   
    //     }
    // };
    
    const [Questions, setQuestions] = useState([
        { Question: '', Answer: '', AnswerContent1: '', AnswerContent2: '', AnswerContent3: ''},
    ])

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
            
            <div className={questionStyles.buttons}>
                <br />
                {/* onClick={addFields} */}
                <button href='#' id='addButton' className="btn btn-outline-primary" >Add Questions</button>
                <span />
                {/* <button type='submit' onClick={handleSubmit} className="btn btn-outline-primary">Submit</button> */}
            </div>
        </div>
    )
}

export default AddQuestions;