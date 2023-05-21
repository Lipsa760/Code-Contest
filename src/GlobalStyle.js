import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Work Sans" , sans-serif;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
}
body{
    background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
}
`;
