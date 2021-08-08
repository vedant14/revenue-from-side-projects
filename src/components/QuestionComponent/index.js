import React from "react"
import { Wrapper } from "./styles"
import Bulb from "../../images/bulb.svg"

export function QuestionComponent({ currentQuestion, questionList }) {
  return (
    <Wrapper>
      <h1>Guess the revenue</h1>
      <div id="question">
        <p>Q{currentQuestion + 1}. </p>
        <p>{questionList[currentQuestion].data.QuestionText}</p>
      </div>

      <a
        href={questionList[currentQuestion].data.ProductLink}
        target="_blank"
        rel="noreferrer"
      >
        Visit {questionList[currentQuestion].data.Name}
      </a>
      <div id="intro">
        <img src={Bulb} alt="idea" />
        <p id="intro">{questionList[currentQuestion].data.Intro}</p>
      </div>
      <div id="layman">
        <p>In other words {questionList[currentQuestion].data.Name} is:</p>
        <p>{questionList[currentQuestion].data.LayManDefinition}</p>
      </div>
    </Wrapper>
  )
}
