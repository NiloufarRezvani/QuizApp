

function QuizResult({corrects,incorrects,selected,questions,onShow}) {
  const notAttempted= questions.map((_, i) => ( selected[i] ? null:i+1 ))
  .filter((q) => q !== null)

  return (
    
      <div className="w-[80%]  -space-y-4 px-36 flex items-center justify-center flex-col flex-1 z-20 relative">
      <div className="w-fit p-1 bg-transparent rounded-xl z-10 border-2 border-pink-600">
        <h1 className="text-xl font-bold text-black rounded-lg bg-pink-400  w-fit py-2 px-4">
          Quiz Result
        </h1>
      </div>
      <div className="w-[80%] h-full flex justify-center flex-col space-y-3 p-4
     rounded-xl bg-pink-200 ">
      <div className='flex gap-4 mt-4 text-base items-center'><span className="font-bold">Quiz summery :</span> 
      <div className="font-bold bg-green-600 rounded-lg  px-2 py-2">Total correct: {corrects.length}{console.log(corrects)}</div>
      <div className="font-bold bg-red-600 rounded-lg  px-2 py-2">Total incorrect:{incorrects.length}{console.log(incorrects)}</div>
      <div className="font-bold bg-pink-950 text-white rounded-lg  px-2 py-2 "> 
        Total not attemp: {notAttempted.length}{console.log(notAttempted)
      }</div> 
      <div className="font-bold bg-neutral-600 text-white rounded-lg  px-2 py-2 ">
      Total not attemp: {notAttempted.join(",")}{console.log(notAttempted)}
      </div>
      </div>
      <div className=" overflow-y-auto h-150 border-t-4 p-4 space-y-3 pr-4 ">
       <span className="font-bold ">Review Quesitons:</span> 
        <div className="grid grid-cols-3 gap-6">
          {
            questions.map((q,i)=>{
              return(
                <div key={i}
                className="w-full p-4 space-y-2 rounded-xl bg-neutral-700/5 border ">
                  <h3 className="font-semibold">Q-{i+1}{q.question}</h3>
                  <p className="font-bold">Correct Answer: {q.correct_answer}</p>
                  <p className="font-bold"> your answer :{selected[i]||"Not Atempt"}</p>
                </div>
              )

            })
          }
        </div>

      </div>
      <button type="submit" onClick={()=>onShow(true)} className="bg-pink-300 border-4
        hover:bg-pink-100 ease-in-out 
        px-8 py-3 border-pink-800 text-black font-bold rounded-lg">
          start Quiz
        </button> 
      </div> 
      </div>
  
  )
}

export default QuizResult