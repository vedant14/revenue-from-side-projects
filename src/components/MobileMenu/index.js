import React from "react"
// Styles
import { OverrideGlobalStyle, NavScroll, Wrapper, BoxLink } from "./styles"

export function MobileMenu({ menuOpen, items, setMenuOpen }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <NavScroll>
          <li>
            <a
              href="https://www.instagram.com/sheroesindia/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Follow us on</p>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/sheroes"
              target="_blank"
              rel="noreferrer"
            >
              <p>Follow us on</p> 
            </a>
          </li>
          <li>
            <a href="https://sheroes.com/">
              <p>Login/Signup</p>
            </a>
          </li>
        </NavScroll>
      </Wrapper>
    </>
  )
}
