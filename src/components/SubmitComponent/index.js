import React from "react"
import { Wrapper } from "./styles"

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
      <div>
        {correct ? <p>{correctTerm}</p> : <p>{wrongTerm}</p>}
        <span
          dangerouslySetInnerHTML={{
            __html:
              questionList[currentQuestion].data.Trivia.childMarkdownRemark
                .html,
          }}
        />
        <div>
          <button onClick={handleNextQuestion}>{nextQuestionText}</button>
        </div>
      </div>
    </Wrapper>
  )
}
