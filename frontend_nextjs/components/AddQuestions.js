import questionStyles from '../styles/AddQ.module.css'


function AddQuestions(){
    // add questions function
    const addFields = () => {
        console.log('test');

        var number = document.getElementById("questions").value;
        var form = document.getElementById("form");
        var ul = document.getElementById("ul");
        var div = document.getElementById("div");

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

            form.appendChild(document.createTextNode("Answer:    "));
            for (let j = 0; j < 4; j++) {
                var input = document.createElement("input");
                input.type = "text";
                form.appendChild(document.createElement("br"));
                form.appendChild(input);
                console.log('hi');
            }

            form.appendChild(document.createElement("br"));
            
        }


    };

    return(
        <div className={questionStyles.addq}>
            <label>Number of Questions:</label>
            <input className={questionStyles.noq} type='text' id='questions' name='questions' />
            
            <form id="form" required>
                {/* <div id="div" required/> */}
            </form>

            <br />
            <button href='#' id='addButton' className="btn btn-outline-primary" onClick={addFields}>Add Questions</button>
            <span />
            <button type='submit' value='Submit' id='subButton' className="btn btn-outline-primary" >Submit</button>
        </div>
    )
}

export default AddQuestions;