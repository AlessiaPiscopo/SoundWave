import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentArtistContext } from "./context/CurrentArtistContext";

ReactDOM.render(
  <React.StrictMode>
    <CurrentArtistContext.Provider value={"TheCats123"}>
      <App />
    </CurrentArtistContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
