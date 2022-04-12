import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import Homepage from "../pages/Homepage";
import SignUp from "../pages/SignUp";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Artist from "./pages/Artist";
import FanNavBar from "./NavBar/FanNavBar";
// import ArtistDashboard from "./pages/ArtistDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <FanNavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
