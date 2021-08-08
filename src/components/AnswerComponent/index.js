import React from "react"
import { Wrapper } from "./styles"
import Bulb from "../../images/bulb.svg"

export function AnswerComponent({
  currentQuestion,
  questionList,
  setScore,
  setCorrect,
  setSubmit,
  setNewQuiz,
  score,
}) {
  const handleAnswerOptionClick = answer => {
    if (answer === questionList[currentQuestion].data.RightAnswer) {
      setScore(score + 1)
      setCorrect(true)
    } else {
      setCorrect(false)
    }
    setNewQuiz(false)
    setSubmit(true)
  }

  return (
    <Wrapper>
      <button
        onClick={() =>
          handleAnswerOptionClick(questionList[currentQuestion].data.Answer1)
        }
      >
        {questionList[currentQuestion].data.Answer1}
      </button>
      <button
        onClick={() =>
          handleAnswerOptionClick(questionList[currentQuestion].data.Answer2)
        }
      >
        {questionList[currentQuestion].data.Answer2}
      </button>
      <button
        onClick={() =>
          handleAnswerOptionClick(questionList[currentQuestion].data.Answer3)
        }
      >
        {questionList[currentQuestion].data.Answer3}
      </button>
      <button
        onClick={() =>
          handleAnswerOptionClick(questionList[currentQuestion].data.Answer4)
        }
      >
        {questionList[currentQuestion].data.Answer4}
      </button>
    </Wrapper>
  )
}
