import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', 'Arial', 'sans-serif';
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 18px;
  }

  p, span {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.8em;
  }
  h3 {
    font-size: 1.6em;
  }
  h4 {
    font-size: 1.4em;
  }
  h5 {
    font-size: 1.2em;
  }
`

export default GlobalStyle
