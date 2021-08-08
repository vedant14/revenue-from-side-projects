import React from "react"
import { Wrapper } from "./styles"
import Bulb from "../../images/bulb.svg"

export function QuestionComponent({ currentQuestion, questionList }) {
  return (
    <Wrapper>
      <h1>Guess the revenue</h1>
      <div id="question">
        <p>Q{currentQuestion + 1}. </p>
        <p
          dangerouslySetInnerHTML={{
            __html:
              questionList[currentQuestion].data.QuestionText
                .childMarkdownRemark.html,
          }}
        />
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
        <p
          id="intro"
          dangerouslySetInnerHTML={{
            __html:
              questionList[currentQuestion].data.Intro.childMarkdownRemark.html,
          }}
        />
      </div>
      <div id="layman">
        <p>In other words {questionList[currentQuestion].data.Name} is:</p>
        <p
          dangerouslySetInnerHTML={{
            __html:
              questionList[currentQuestion].data.LayManDefinition
                .childMarkdownRemark.html,
          }}
        />
      </div>
    </Wrapper>
  )
}
