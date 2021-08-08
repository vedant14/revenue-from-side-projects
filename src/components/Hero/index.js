import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./styles"

export function Hero({ children }) {
  return (
    <Wrapper>
      <h1>Guess the revenue of these popular side projects</h1>
      <Link to="/quiz/">Start the quiz</Link> <br />
      <p>
        All the revenue related data has been publicly made available by the
        founders themselves
      </p>
    </Wrapper>
  )
}
