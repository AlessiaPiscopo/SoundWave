import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Artist from "./pages/Artist";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />

          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
