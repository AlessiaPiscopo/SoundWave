import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import HomePage from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Artist from "./pages/Artist";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
