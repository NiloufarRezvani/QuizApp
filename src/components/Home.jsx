import React, {  useState } from "react";
import { fetchQuiz } from "../api/quizApi";
import QuisOptions from "./QuisOptions";
import Quiz from "./Quiz";

function Home() {
  const [data, setData] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const start = async (options) => {
    try {
      const data = await fetchQuiz(
        options.category,
        options.difficulty,
        options.type,
        options.amount
      );
      const formmatData= data.map((q)=>({
        ...q,
        answers:[...q.incorrect_answers, q.correct_answer].sort()
      }))
      setData(formmatData);
      setShowOptions(false)
    } catch (error) {
      console.log(error);
    }
  };

  return(
     <div className="w-full flex flex-1 items-center justify-center">
        {
            showOptions ? (<QuisOptions startQuiz={start}/>):
            (<Quiz questions={data} setShow={setShowOptions}/>)
        }
     </div>
    )
}

export default Home;
