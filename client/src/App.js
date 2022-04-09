import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Home from "./pages/Home";
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
          <Route exact path="/" element={<Home />} />

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
