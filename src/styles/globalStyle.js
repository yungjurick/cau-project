import { createGlobalStyle } from "styled-components";
import { COLORS, FONT_FAMILY, FONT_FAMILY_GOTHIC } from "./scheme";

const GlobalStyle = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 14px;
  font-family: ${FONT_FAMILY};
}

textarea, input {
  font-family: ${FONT_FAMILY};
}

.gothic {
  font-family: ${FONT_FAMILY_GOTHIC};
}

body {
  position: relative;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: ${COLORS.primary};
}

h1,h2,h3,h4,h5,h6 {
  font-weight: 400;
  color: ${COLORS.primary};
  margin: 0;
}

p {
  margin: 0;
}

a {
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  :visited {
    color: ${COLORS.primary};
  }
}

.viewer-backdrop {
  background-color: rgba(0, 0, 0, 0.8) !important;
}

`;

export default GlobalStyle;
