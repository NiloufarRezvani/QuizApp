import React from "react";

function QuizQuestions({ questions, index, selected, handleSelected }) {
  return (
    <div>
      <h2 className="font-semibold text-xl text-black">Q-{index+1} {questions.question}</h2>
      <p>
        {questions.answers.map((answer, i) => (
          <label
            className={`block h-11 p-3 rounded-lg text-lg font-medium ${
              selected === answer ? "bg-pink-400/20 " : ""
            }
        hover:bg-pink-300/20`}
            key={i}
          >
            <input
              type="radio"
              className="mr-2 w-4 h-4 bg-transparent "
              value={answer}
              checked={selected === answer}
              onChange={() => handleSelected(index, answer)}
            />
            {answer}
          </label>
        ))}
      </p>
    </div>
  );
}

export default QuizQuestions;
