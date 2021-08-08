import styled, { createGlobalStyle } from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Link } from "gatsby"
export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
  }
`
export const Wrapper = styled.div`
  display: block;
  position: fixed;
  background: ${colors.white};
  right: ${props => (props.menuOpen ? "0px" : "-100%")};
  width: 100%;
  height: 100%;
  top: 0px;
  padding: 0 0 0 40px;
  transition: all 0.4s ease-out;
  z-index: 10;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  @media screen and (min-width: 728px) {
    display: none;
  }
`

export const NavScroll = styled.ul`
  position: absolute;
  width: 80%;
  top: 60px;
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  a {
    text-decoration: none;
    align-items: center;
    display: inline-flex;
    > p {
      color: ${colors.primaryBlack};
    }
    > img {
      width: 30px;
      height: 30px;
      margin-left: 20px;
    }
  }

  li {
    transition: all 0.5s ease;
    cursor: pointer;
    align-items: center;
    margin: 20px 0;
    font-weight: 500;
  }
`
