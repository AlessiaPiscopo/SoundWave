// Name ideas: Delay, Scene, Harmonics, Analog, some cool-sounding planet or star, Modular (like React lol), Synthesis, 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login2 from "./pages/Login2";
import Profile from "./pages/Profile";
import Artist from "./pages/Artist";
// import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login2 />} />

          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
