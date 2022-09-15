import React from 'react'

const Answer = (props) => {

  let dap = Object.keys(props.answer)
    .map((questionAnswers,i) => (
      <h3>
        {props.answer[questionAnswers]}
      </h3>
  ));


  return (
      <div className="answer-format">
        <div className="buttonFormat">
          <button className="button-18">{dap[0]}</button>
        </div>
        <div className="buttonFormat">
          <button className="button-18">{dap[1]}</button>
        </div>
        <div className="buttonFormat">
          <button className="button-18">{dap[2]}</button>
        </div>
        <div className="buttonFormat">
          <button className="button-18">{dap[3]}</button>
        </div>
        <div className="buttonFormat">
          <button className="button-19">SUBMIT</button>
        </div>
      </div>
  )
}

export default Answer;
