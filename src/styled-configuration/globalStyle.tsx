import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   html, body { height: 100%; }
   #root{
        display: grid;
        grid-template-rows: minmax(auto,auto) minmax(0, 100%);
        height: 100%;
   }
`;

export const theme = {
  colors: {
    primary: "#27ae60",
    secondary: "#40739e",
    success: "#44bd32",
    warning: "#e1b12c",
    alert: "#c23616",
    light: "#f5f6fa",
    dark: "#2f3640",
    lightDark: "#bdc3c7",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  padding: {
    small: "10px",
    medium: "20px",
    large: "30px",
  },
};
