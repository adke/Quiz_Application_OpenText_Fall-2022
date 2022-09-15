import questionStyles from '../styles/AddQ.module.css'



function AddQuestions(){
    // add questions function
    const addFields = () => {
        console.log('test');

        var number = document.getElementById("questions").value;
        var form = document.getElementById("form");
        var addButton = document.getElementById("button");
        var subButton = document.getElementById("submit");

        while (form.hasChildNodes()) {
            form.removeChild(form.lastChild);
        }
        for (let i = 0; i < number; i++){
            form.appendChild(document.createTextNode("Question " + (i+1) + ":    "));
            var input = document.createElement("input");
            input.type = "text";

            form.appendChild(document.createElement("br"));
            form.appendChild(input);
            form.appendChild(document.createElement("br"));

            form.appendChild(document.createTextNode("Answer " + (i+1) + ":    "));
            var input = document.createElement("input");
            input.type = "text";

            form.appendChild(document.createElement("br"));
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
        }


    };


    return(
        <div className={questionStyles.addq}>
            <h4>Number of Questions:</h4>
            <input className='noq' type='text' id='questions' name='questions' />
            
            <form id="form" required>
                
                
            </form>
            <br />
            <button href='#' id='addButton' className="button-17" onClick={addFields}>Add Questions</button>
            <span />
            <button type='submit' value='Submit' id='subButton' className="button-17" >Submit</button>
        </div>
    )
}

export default AddQuestions;