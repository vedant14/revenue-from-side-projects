import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

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

  const totalQuestions = 5
  const questionList = data.allQuestionsJson.nodes
  const correctTerm = shuffleArray(data.statementsJson.right)[0]
  const wrongTerm = shuffleArray(data.statementsJson.wrong)[0]

  if (currentQuestion === 0) {
    shuffleArray(questionList)
  }

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
      setCorrect(true)
    } else {
      setCorrect(false)
    }
    setSubmit(true)
  }

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
  const handleScoreReset = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
    setNextQuestionText("Next Question")
  }

  return (
    <Layout>
      <Seo title="Guess the revenue quiz" />
      {showScore ? (
        <div>
          Your score is {score}
          <button onClick={handleScoreReset}> Play Again </button>
        </div>
      ) : (
        <div>
          <h1>Guess the revenue</h1>
          <div>
            <p>
              Q{currentQuestion + 1}.{" "}
              {questionList[currentQuestion].questionText}
            </p>

            <a
              href={questionList[currentQuestion].link}
              target="_blank"
              rel="noreferrer"
            >
              Visit
            </a>
            <p>{questionList[currentQuestion].intro}</p>
            {submit === false ? (
              <div>
                {questionList[currentQuestion].answerOptions.map(answer => (
                  <div>
                    <button
                      onClick={() => handleAnswerOptionClick(answer.isCorrect)}
                    >
                      {answer.answerText}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {correct ? <p>{correctTerm}</p> : <p>{wrongTerm}</p>}
                <p>{questionList[currentQuestion].trivia}</p>
                <div>
                  <button onClick={handleNextQuestion}>
                    {nextQuestionText}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    statementsJson {
      right
      wrong
    }
    allQuestionsJson {
      nodes {
        questionText
        link
        intro
        trivia
        answerOptions {
          answerText
          isCorrect
        }
      }
    }
  }
`

export default Quiz
