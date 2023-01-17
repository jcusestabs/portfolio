import { createGlobalStyle } from "styled-components";

export const GeneralStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  @font-face {
    font-family: 'Akira';
    src: url('fonts/Akira_Expanded_Demo.otf') format('truetype');
  }

  @font-face {
    font-family: 'Highrise Regular';
    src: url('fonts/HighriseFont-Demo-Regular.otf') format('truetype');
  }

  @font-face {
    font-family: 'Nexa';
    src: url('fonts/NexaText-Trial-Regular.woff') format('woff');
  }

  @font-face {
    font-family: "Nexa";
    font-weight: lighter;
    src: url('fonts/NextaText-Trial-Light.woff') format('woff');
  }

  @font-face {
    font-family: "Build Tiling";
    font-weight: lighter;
    src: url('fonts/built titling lt.ttf') format('truetype');
  }
`;

export const COLORS = {
  BLACK: "#000",
  WHITE: "#D1CCDC",
  PURPLE: "#4D5382",
  YELLOW: "#F5CB5C",
  BROWN: "735F3D",
};
