import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Layout,
  SEO,
  QuestionComponent,
  AnswerComponent,
  SubmitComponent,
  FinalScore,
} from "../components"
const Quiz = ({ data }) => {
  function shuffleArray(array) {
    let i = array.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [nextQuestionText, setNextQuestionText] = useState("Next Question")
  const [newQuiz, setNewQuiz] = useState(true)
  const totalQuestions = 5
  const questionList = data.allAirtable.nodes
  const correctTerm = shuffleArray(data.statementsJson.right)[0]
  const wrongTerm = shuffleArray(data.statementsJson.wrong)[0]

  if (newQuiz === true) {
    shuffleArray(questionList)
  }

  console.log("newQuiz", newQuiz)

  return (
    <Layout>
      <SEO title="Guess the revenue quiz" />
      {showScore ? (
        <FinalScore
          setScore={setScore}
          score={score}
          setCurrentQuestion={setCurrentQuestion}
          setShowScore={setShowScore}
          setNextQuestionText={setNextQuestionText}
          setNewQuiz={setNewQuiz}
        />
      ) : (
        <div>
          <QuestionComponent
            currentQuestion={currentQuestion}
            questionList={questionList}
          />

          {submit === false ? (
            <AnswerComponent
              setCorrect={setCorrect}
              setScore={setScore}
              setSubmit={setSubmit}
              currentQuestion={currentQuestion}
              questionList={questionList}
              score={score}
              setNewQuiz={setNewQuiz}
            />
          ) : (
            <SubmitComponent
              currentQuestion={currentQuestion}
              questionList={questionList}
              correct={correct}
              correctTerm={correctTerm}
              wrongTerm={wrongTerm}
              setShowScore={setShowScore}
              totalQuestions={totalQuestions}
              setSubmit={setSubmit}
              setNextQuestionText={setNextQuestionText}
              setCurrentQuestion={setCurrentQuestion}
              nextQuestionText={nextQuestionText}
            />
          )}
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { data: { Status: { eq: "Publish" } } }) {
      nodes {
        data {
          Answer1
          Answer2
          Answer3
          Answer4
          Intro
          LaunchDate(formatString: "MMM, Y")
          Name
          ProductLink
          RevenueCheckLink
          RightAnswer
          QuestionText
          LastVerifiedOn(formatString: "MMM, YY")
          LayManDefinition
          Trivia
        }
      }
    }
    statementsJson {
      right
      wrong
    }
  }
`

export default Quiz
