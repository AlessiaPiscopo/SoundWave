import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  // const darkThemeStyles = {
  //   backgroundColor: "black",
  //   color: "white",
  // };
  // const lightThemeStyles = {
  //   backgroundColor: "white",
  //   color: "black",
  // };

  // target dark theme and toggle between enabled/disabled
  const toggleTheme = () => {
    if (lightTheme) {
      setDarkTheme(true);
      setLightTheme(!lightTheme);
      console.log("dark theme toggled");
    } else if (darkTheme) {
      setDarkTheme(!darkTheme);
      setLightTheme(true);
      console.log("light theme toggled");
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
