import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
  margin-top: 140px;
  max-width: 500px;

  > h1 {
    margin: 30px 0px;
  }
  > a {
    background: ${colors.primary};
    transition: 0.25s;
    padding: 30px;
    margin: 100px 0px;
    width: 100%;
    height: 100%;
    color: ${colors.white};
    border-radius: 4px;
    box-shadow: 5px 5px 4px ${colors.washedBlack};
    &:hover {
      box-shadow: 3px 3px 3px ${colors.washedBlack};
    }
  }
  > p {
    margin: 100px 0px;
  }
`
