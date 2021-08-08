import { createGlobalStyle } from "styled-components"

export const colors = {
  primaryBlack: "#000000",
  washedBlack: "#4A4A4A",
  primary: "#FF6F66",
  white: "#FFFFFF",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.white}; 
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: ${colors.washedBlack};
    @media screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 60px;
    }
  }

  h2{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  h3{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  h4{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 18px;
    }
  }

  p, a, li {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    color: ${colors.washedBlack};
    font-size: 16px;
    line-height: 14px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  small{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    > a {
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none; 
    }
  }




  .Container {
      margin: auto 30px;
      @media screen and (min-width: 768px) {
        margin: auto 60px;
      }
      @media screen and (min-width: 1024px) {
        margin: auto 60px;
      }
      @media screen and (min-width: 1324px) {
        margin: auto 150px;
      }
      @media screen and (min-width: 1920px) {
        max-width: 1600px;
        margin: auto;
      }
    }

  .is-current{
    > a {
      color: ${colors.primaryBlack} !important;
    }
  }
  
  .is-current-mobile{
    > a {
      color: ${colors.white} !important;
      &:after {
        content: " •"
      }
    }
  }


  .buy-button{
    background: ${colors.primary};
    box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid ${colors.primary};
    > h4 {
      color: ${colors.white};
      padding: 10px 9px;
      margin: 0px;
      text-transform: capitalize;
    }
    &:hover{
      background: ${colors.secondary};
      border: 1px solid ${colors.secondary};
    }
    &:focus{
      outline: none;
    }
  }

  .slick-arrow:before {
    color: ${colors.primaryBlack};
  }
  .slick-prev {
    position: absolute;
    top: 100%;
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    z-index: 100;
    left: 45%;
  }
  .slick-next {
    position: absolute;
    top: 100%;
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    z-index: 100;
    left: 55%;
  }
`
