import questionStyles from '../styles/AddQ.module.css'

function AddQuestions(){
    const addFields = () => {
        console.log('test');

        var number = document.getElementById("questions").value;
        var container = document.getElementById("container");
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        for (let i = 0; i < number; i++){
            container.appendChild(document.createTextNode("Question: " + (i+1) + "    "));
            var input = document.createElement("input");
            input.type = "text";
            container.appendChild(document.createElement("br"));
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
        }
        
    };
    return(
        <div className={questionStyles.addq}>
            <h4>Number of Questions:</h4>
            <input type='text' id='questions' name='questions' />
            {/* <form id='form'>
                <h4>Question 1: </h4>
                <input type="text" />
                <h4>Answer 1: </h4>
                <input type="text" />
            </form> */}
            <form id="container" />
                
            <br />
            <button href='#' id='button' className="button-17" onClick={addFields}>Add Questions</button>
            <span />
            <button type='submit' value='Submit' id='submit' className="button-17" >Submit</button>
        </div>
    )
}

export default AddQuestions;