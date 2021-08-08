import React from "react"
import { Wrapper } from "./styles"
import CheckIcon from "../../images/check.png"
import CrossIcon from "../../images/cross.png"

export function SubmitComponent({
  currentQuestion,
  questionList,
  correct,
  correctTerm,
  wrongTerm,
  setShowScore,
  totalQuestions,
  setSubmit,
  setNextQuestionText,
  nextQuestionText,
  setCurrentQuestion,
}) {
  const handleNextQuestion = () => {
    setSubmit(false)
    const nextQuestion = currentQuestion + 1

    if (nextQuestion === totalQuestions - 1) {
      setNextQuestionText("Submit Quiz")
    }

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  return (
    <Wrapper>
      {correct ? (
        <div id="correctTerm">
          <img src={CheckIcon} alt="right" />
          <p>{correctTerm}</p>
        </div>
      ) : (
        <div id="wrongTerm">
          <img src={CrossIcon} alt="wrong" />
          <p>
            {wrongTerm} The correct answer is{" "}
            {questionList[currentQuestion].data.RightAnswer}
          </p>
        </div>
      )}

      <div id="trivia">
        <p>{questionList[currentQuestion].data.Trivia}</p>
      </div>
      <button onClick={handleNextQuestion}>
        <p>{nextQuestionText}</p>
      </button>
    </Wrapper>
  )
}
