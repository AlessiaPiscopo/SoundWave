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

  --color-almost-black: #181A1C;
  --color-cadet-grey: #8c9a9e;
  --color-silver-sand: #c4cbca;
  --color-light: #C8C3BC;

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
  /* font-family: "Roboto Mono", Menlo, monospace; */
  font-family: Menlo, monospace;
  font-size: 14px;
  background-color: var(--color-silver-sand);
  color: var(--color-text-dark);
  /* padding: 1rem; */
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

form {
  display: flex;
  flex-direction: column;
}

/* Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  font-size: 14px;
}

/* Create a root stacking context */
#root, #__next {
  isolation: isolate;
} 
`;
