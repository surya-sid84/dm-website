import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    margin: 0px;
    padding: 0px;
    scroll-behavior: smooth;
    transition: all 0.2s linear;
    text-decoration: none;
    outline: none;
    font-family: "Public Sans", sans-serif;
  }

  img {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    background: #e1e9f8;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2c2f30;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }

  body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  .PhoneInputCountryIconImg,
  .PhoneInputCountrySelectArrow {
    color: white;
  }

  * > a {
    text-decoration: none;
    color: inherit;
  }
  p,
  br,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  em,
  q,
  hr,
  code,
  pre,
  ul,
  li,
  ol,
  dl,
  dt,
  dd,
  mark,
  ins,
  del,
  sup,
  small,
  i,
  sub,
  b,
  label,
  legend,
  span > a,
  input,
  .MuiInputBase-root > .MuiInputBase-input {
    font-family: "Public Sans", sans-serif;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${styles}
`;
