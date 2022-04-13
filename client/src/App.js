import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ArtistData from "./ArtistData";
import FanNavBar from "./components/NavBar/FanNavBar";

// import Profile from "./pages/Profile";
// import Artist from "./pages/Artist";
import ArtistDashboard from "./pages/ArtistDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <FanNavBar />
        {/* <ArtistData /> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/artist-dashboard" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
