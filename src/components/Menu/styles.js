import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Link } from "gatsby"

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  align-items: center;
  margin: auto 0px auto auto;
  a {
    color: ${colors.washedBlack};
    &:hover {
      font-weight: 300;
    }
    > img {
      width: 30px;
      margin: auto;
    }
  }
  > li {
    display: inline-block;
    margin-right: 20px;
    :first-child {
      font-weight: 500;
      display: none;
      @media screen and (min-width: 1024px) {
        display: block;
      }
    }
    :last-child {
      margin-right: 0;
      > a {
        color: ${colors.primaryRed};
        font-weight: 500;
      }
    }
  }
  @media screen and (min-width: 728px) {
    display: inline-flex;
  }
`
