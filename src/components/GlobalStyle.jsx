import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 30px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  button {
    position: relative;
     min-width: 150px;
  height: 30px;
  line-height: 1.33;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background: rgb(255, 27, 0);
  background: linear-gradient(
    0deg,
    rgba(255, 27, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );

  :hover {
    color: #f0094a;
    background: transparent;
    box-shadow: none;
  }

  :before,
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #f0094a;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }

  :after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  :hover:before,
  :hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
  }
`;
