import { createGlobalStyle } from "styled-components";
import './_fonts.scss';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Proxima Nova';
    padding: 43px 45px;
    margin: 0;
    background-color: #FFDF8C;
  }
  .wrapper {
    background-color: #fff;
    border-radius: 10px;
    padding: 0 65px 90px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  }
`;
