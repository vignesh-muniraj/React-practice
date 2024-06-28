import React, { useState } from "react";
import { answered, questions } from "./questions";

function QuizApp() {
  let userScore = 0;
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(Array(questions.length).fill(null));
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState(0);
  const handleChange = (e) => {
    const updatedAnswers = [...answer];
    updatedAnswers[index] = e.target.value;
    setAnswer(updatedAnswers);
    console.log(answer);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (index < 9) setIndex(index + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (index !== 0) setIndex(index - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < 10; i++) {
      if (answer[i] === null) {
        alert("Please fill all the options");
        return;
      } else if (answer[i] === answered[i]) userScore += 1;
    }
    setSubmit(true);
    setScore(userScore);
  };

  return (
    <div>
      <form>
        <>
          <h1>{questions[index].question}</h1>
          <p>
            <input
              type="radio"
              name="option"
              id="opt1"
              value={questions[index].option_1}
              checked={answer[index] === questions[index].option_1}
              onChange={handleChange}
            />
            {questions[index].option_1}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              id="opt2"
              value={questions[index].option_2}
              checked={answer[index] === questions[index].option_2}
              onChange={handleChange}
            />
            {questions[index].option_2}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              id="opt3"
              value={questions[index].option_3}
              checked={answer[index] === questions[index].option_3}
              onChange={handleChange}
            />
            {questions[index].option_3}
          </p>
          <p>
            <input
              type="radio"
              name="option"
              id="opt4"
              value={questions[index].option_4}
              checked={answer[index] === questions[index].option_4}
              onChange={handleChange}
            />
            {questions[index].option_4}
          </p>
          <button onClick={handleBack} id="back">
            {" "}
            Back{" "}
          </button>
          <button onClick={handleNext} id="next">
            {" "}
            Next{" "}
          </button>
        </>
        {index === questions.length - 1 && (
          <button onClick={handleSubmit}> Submit </button>
        )}
        {submit && <h1>Your Score : {score} </h1>}
      </form>
    </div>
  );
}

export default QuizApp;
