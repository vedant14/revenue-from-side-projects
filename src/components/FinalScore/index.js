import React from "react"
import { Wrapper } from "./styles"
import Bulb from "../../images/bulb.svg"

export function FinalScore({
  setScore,
  score,
  setCurrentQuestion,
  setShowScore,
  setNextQuestionText,
}) {
  const handleScoreReset = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
    setNextQuestionText("Next Question")
  }

  return (
    <Wrapper>
      <div>
        Your scores is {score}
        <button onClick={handleScoreReset}> Play Again </button>
      </div>
    </Wrapper>
  )
}
