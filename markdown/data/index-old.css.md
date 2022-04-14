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
  
    --color-almost-white: #f8f9fa;
    --color-almost-black: #181A1C;
    --color-cadet-grey: #8c9a9e;
    --color-silver-sand: #c4cbca;
    --color-light: #C8C3BC;
    --color-opal: #96bbbb;
    --color-purple-grey: #7B7491;

    --color-black-coral: #696d7d;
    --color-peachy: #ea9e8d;
    --color-light-yellow: #fffbdb;
  
  }
  
  /* Allow percentage-based heights in the application */
  html, body {
    height: 100%;
    background-color: var(--color-almost-black)
  }
  
  /* Typographic tweaks!
    - Add accessible line-height
    - Improve text rendering */
  body {
    /* line-height: 1.5; */
    -webkit-font-smoothing: antialiased;
    /* font-family: "Helvetica Neue", sans-serif; */
    font-family: Menlo, monospace;
    font-size: 13px;
    /* padding: 1rem; */

    /* LIGHT */
    /* background-color: var(--color-almost-white); */
    /* background-color: darkgrey;
    color: var(--color-almost-black); */

    /* DARK */
    /* background-color: var(--color-almost-black); */
    color: var(--color-almost-white);

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
    font-size: 13px;
  }
  
  /* Create a root stacking context */
  #root, #__next {
    isolation: isolate;
  } 