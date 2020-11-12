import React from 'react'
import {QuestionPropsType} from "../TYPES/Quiz_Types"
const QuestionCard:React.FC<QuestionPropsType>=({questions,options})=>{
    console.log(questions,options)
    return (
        <div className="question_container">

    <div className="question"> {questions}</div>

    <form>
       {options.map((opt:string)=>{
           return( <label>
            <input type="radio" name="opt" value={opt}></input>
            {opt}
        </label>)
       })}
    </form>

            
        </div>
    )
}

export default QuestionCard
