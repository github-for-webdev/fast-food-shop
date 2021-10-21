import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    color: black;
    background-color: #f0f0f0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: Pacifico;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button, {
    -webkit-appearance: none;
  }
`;