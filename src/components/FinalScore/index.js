import React from "react"
import { Wrapper } from "./styles"
import Bulb from "../../images/bulb.svg"

export function FinalScore({
  setScore,
  score,
  setCurrentQuestion,
  setShowScore,
  setNextQuestionText,
  setNewQuiz,
}) {
  const handleScoreReset = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
    setNextQuestionText("Next Question")
    setNewQuiz(true)
  }

  return (
    <Wrapper>
      <h1>Hope you enjoyed the quiz!</h1>
      <h2>Your scores is {score}</h2>
      <p>Do you want to play again?</p>
      <button onClick={handleScoreReset}>
        <p>Play Again</p>
      </button>
    </Wrapper>
  )
}
