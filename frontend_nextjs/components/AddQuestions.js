import questionStyles from '../styles/AddQ.module.css'

import { useState } from 'react'

function AddQuestions() {

    // add questions function
    const addFields = () => {
        console.log('test');

        var number = document.getElementById("questions").value;
        var form = document.getElementById("form");

        while (form.hasChildNodes()) {
            form.removeChild(form.lastChild);
        }
        for (let i = 0; i < number; i++){
            // ul Element
            var ul = document.createElement("ul");
            ul.id = "ul";
            form.appendChild(ul);

            ul.appendChild(document.createTextNode("Question " + (i+1) + ":    "));
            // Question Input
            var input = document.createElement("input");
            input.type = "text";
            input.className = "Qinput";
            input.required = true;
            ul.appendChild(document.createElement("br"));
            ul.appendChild(input);                            // Question input
            
            ul.appendChild(document.createElement("br"));

            ul.appendChild(document.createTextNode("Answer:"));
            for (let j = 0; j < 4; j++) {
                var input = document.createElement("input");
                input.type = "text";
                input.required = true;
                if (j == 0) {
                    input.className = "A_right_input";
                } else {
                    input.className = "A_wrong_input";
                }
            
                ul.appendChild(document.createElement("br"));
                ul.appendChild(input);                          // Answer input
            }
            ul.appendChild(document.createElement("br"));   
        }
    };

    const [quiz, setQuiz] = useState();

    const submitQuiz = async () => {
        const response = await fetch('/api/index', {
            method: 'POST',
            body: JSON.stringify({ quiz }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div className={questionStyles.addq}>
            
            <div>
                <label>Instructions:</label>
                <p>Input the number of questions below and click "Add Questions". Then input the correct answer in the green box and the incorrect answers in the red box.</p>
            </div>
            
            <label>Quiz Name:</label>
            <input type='text' required/>
            
            <br />
            <label>Subject:</label>
            <input type='text' required/>
            
            <br />
            <label>Number of Questions:</label>
            <input className={questionStyles.noq} type='text' id='questions' name='questions' />
            
            <form id='form' value={quiz} onChange={e => setQuiz(e.target.value)}>

            </form>
            
            <div className={questionStyles.buttons}>
                <br />
                <button href='#' id='addButton' className="btn btn-outline-primary" onClick={addFields}>Add Questions</button>
                <span />
                <button type='submit' onClick={submitQuiz} className="btn btn-outline-primary">Submit</button>
            </div>
        </div>
    )
}

export default AddQuestions;