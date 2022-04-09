import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

/* Use a more-intuitive box-sizing model. */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
}

html {
  --color-background: #181A1C;
  --color-text: #C8C3BC;
}

/* Allow percentage-based heights in the application */
html, body {
  height: 100%;
}

/* Typographic tweaks!
  - Add accessible line-height
  - Improve text rendering */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  /* font-family: "Helvetica Neue", sans-serif; */
  background-color: var(--color-background);
  font-family: Menlo, monospace;
  color: var(--color-text);
  padding: 10px;
}

/* Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* Remove built-in form typography styles */
input, button, textarea, select {
  font: inherit;
}

/* Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* Create a root stacking context */
#root, #__next {
  isolation: isolate;
} 
`;
