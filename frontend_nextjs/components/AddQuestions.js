import questionStyles from "../styles/AddQ.module.css";
import { useState } from "react";
import axios from "axios";

function AddQuestions() {
  // QuizName and Subject
  const [quizName, setQuizName] = useState();
  const [subject, setSubject] = useState();

  // Handle Submit Function ============================================================================
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const newQuiz = {
    //     "quizName": quizName,
    //     "subject": subject,
    //     "questions": Questions
    // };

    const newQuiz = {
      quizName: quizName,
      subject: subject,
      questions: Questions.map((questionObj, index) => ({
        question: questionObj.Question,
        answers: [
          { content: questionObj.Answer, isCorrect: 1 },
          { content: questionObj.incorrectAnswer1, isCorrect: 0 },
          { content: questionObj.incorrectAnswer2, isCorrect: 0 },
          { content: questionObj.incorrectAnswer3, isCorrect: 0 },
        ],
      })),
    };

    console.log("quiz: ", newQuiz);

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      },
    };

    // Send data to Server
    // try {
    //   const { data } = await axios({
    //     url: "/api/createNewQuiz",
    //     method: "POST",
    //     host: "http://localhost:8080/quizzes/createNewQuiz",
    //     data: newQuiz,
    //   });
    //   console.log("Response from POST: ", data);
    // } catch (error) {
    //   console.log("Error: ", error);
    // }
    const data = await axios.post(
      "http://localhost:8080/quizzes/createNewQuiz:",
      newQuiz,
      config
    );
  };

  // handle Functions ===================================================================================
  const handleChangeInput = (index, event) => {
    const values = [...Questions];
    values[index][event.target.name] = event.target.value;
    setQuestions(values);
  };

  const handleAddFields = () => {
    // setQuestions([...Questions,
    //             { Question: '',
    //             Answer: '',
    //             AnswerContent1: '',
    //             AnswerContent2: '',
    //             AnswerContent3: '' }
    //         ]);
    setQuestions([
      ...Questions,
      {
        Question: "",
        Answer: "",
        incorrectAnswer1: "",
        incorrectAnswer2: "",
        incorrectAnswer3: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...Questions];
    values.splice(index, 1);
    setQuestions(values);
  };

  // QUESTIONS STATE ====================================================================================
  // const [Questions, setQuestions] = useState([
  //     { Question: '',
  //       answers:[
  //         {Answer: '', isCorrect: 1},
  //         {AnswerContent1: '', isCorrect: 0},
  //         {AnswerContent2: '', isCorrect: 0},
  //         {AnswerContent3: '', isCorrect: 0}
  //         ]
  //     },
  // ])
  const [Questions, setQuestions] = useState([
    {
      Question: "",
      Answer: "",
      incorrectAnswer1: "",
      incorrectAnswer2: "",
      incorrectAnswer3: "",
    },
  ]);

  // Page Structure =======================================================================================
  return (
    <div className={questionStyles.addq}>
      <div>
        <label>Instructions:</label>
        <p>
          Input the number of questions below and click "Add Questions". Then
          input the correct answer in the green box and the incorrect answers in
          the red box.
        </p>
      </div>

      <label>Quiz Name:</label>
      <input
        type="text"
        placeholder="Name"
        onChange={({ target }) => setQuizName(target?.value)}
        value={quizName}
      />

      <br />
      <label>Subject:</label>
      <input
        type="text"
        placeholder="Subject"
        onChange={({ target }) => setSubject(target?.value)}
        value={subject}
      />

      <br />
      <label>Input Questions Below:</label>

      <form id="form" onSubmit={handleSubmit}>
        <div className={questionStyles.allQuestions}>
          {Questions.map((inputField, index) => (
            <div className={questionStyles.questionDiv} key={index}>
              <input
                type="text"
                name="Question"
                onChange={(event) => handleChangeInput(index, event)}
                value={inputField.Question}
                placeholder="Question"
                className={questionStyles.questionInput}
              />

              <input
                type="text"
                name="Answer"
                onChange={(event) => handleChangeInput(index, event)}
                value={inputField.Answer}
                placeholder="Answer"
              />

              <input
                type="text"
                name="incorrectAnswer1"
                onChange={(event) => handleChangeInput(index, event)}
                value={inputField.incorrectAnswer1}
                placeholder="Incorrect Answer"
              />
              <input
                type="text"
                name="incorrectAnswer2"
                onChange={(event) => handleChangeInput(index, event)}
                value={inputField.incorrectAnswer2}
                placeholder="Incorrect Answer"
              />
              <input
                type="text"
                name="incorrectAnswer3"
                onChange={(event) => handleChangeInput(index, event)}
                value={inputField.incorrectAnswer3}
                placeholder="Incorrect Answer"
              />
              <div className={questionStyles.buttonDiv}>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={questionStyles.submitBreak}>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-outline-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuestions;
