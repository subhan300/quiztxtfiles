import React,{useEffect,useState} from 'react';

import './App.css';
import {GetQuizDetail} from "./SERVICES/Quiz_Service"
import {Quiz,QuestionType} from "./TYPES/Quiz_Types" 
import QusetionCard from "./COMPONENTS/QuestionCard"
function App() {


useEffect(()=>{
async function fetchData(){
  const questions:QuestionType[]=await GetQuizDetail(4,"easy");
  console.log(questions)
  SetQuiz(questions)
}
fetchData()




},[]);
let [quiz,SetQuiz]=useState<QuestionType[]>([]);
if(!quiz.length)
return <h1>LOADING......</h1>
return(
    <div className="App">
      <QusetionCard  options={quiz[0].options} questions={quiz[0].question}    />
   
    </div>
  )
}

export default App;
