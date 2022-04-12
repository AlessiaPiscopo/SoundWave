import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// import { CurrentArtistContextProvider } from "./context/CurrentArtistContext";
import { ThemeContextProvider } from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      {/* <CurrentArtistContextProvider value={"TheCats123"}> */}
      <App />
      {/* </CurrentArtistContextProvider> */}
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
