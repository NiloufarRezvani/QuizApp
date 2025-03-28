import React, { useState } from "react";
import QuizResult from "./QuizResult";
import QuizTimer from "./QuizTimer";
import QuizQuestions from "./QuizQuestions";

function Quiz({ questions,setShow }) {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [selected, setSelected] = useState({});
  const [submited, setSubmited] = useState(false);
  //function for next question and Timers
  const handleNext =()=>{
    if(currentQuestions <questions.length -1){
      setCurrentQuestions(currentQuestions+1)
    }else{
      setSubmited(true)
    }
  }
  //funtion for handling asnwers
  const handleAnswer=(index,answer)=>{
    setSelected({...selected, [index]:answer})
  }
  //correct answers
  const corrects = questions
    .map((q, i) => (q.correct_answer === selected[i] ? i + 1 : null))
    .filter((q) => q !== null);
    //incorrect asnwers 
    const inCorrects = questions.map((q, i) => (q.incorrect_answer === selected[i]  ? i + 1 : null))
    .filter((q) => q !== null);
    if(submited){
      return(
        <QuizResult 
        corrects={corrects}
       incorrects={inCorrects}
        selected={selected}
        questions={questions}
        onShow={setShow}
        />
      )
    }

  return (
    <div className="w-[80%]  -space-y-4 px-36 flex items-center justify-center flex-col z-20 relative">
      <div className="w-fit p-1 bg-transparent rounded-xl z-10 border-2 border-pink-200 ">
        <h1 className="text-xl font-bold text-black rounded-lg bg-pink-200  w-fit py-2 px-4">
          {questions[0].category}
        </h1>
      </div>
      <div className="w-full p-6 space-y-4 bg-pink-600 border border-pink-500 backdrop-blur">
        <QuizTimer
        onTimer={handleNext} 
        difficulty={questions[currentQuestions].difficulty}
        questionCount={questions.length}/>
        <QuizQuestions 
        questions={questions[currentQuestions]}
        index={currentQuestions}
        handleSelected={handleAnswer}
        selected={selected[currentQuestions]}
        />
        
        <button type="submit"onClick={handleNext} className="bg-pink-300 border-4
        hover:bg-pink-100 ease-in-out
        px-8 py-3 border-pink-800 text-black font-bold rounded-lg">{
          currentQuestions===questions.length -1 ? 'Show Result' : 'Next Questions'
        }</button>
      </div>  
    </div>
  );
}

export default Quiz;
