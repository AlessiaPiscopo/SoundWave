import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
// import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Artist from "./pages/Artist";
import FanNavBar from "./components/NavBar/FanNavBar";
import ArtistDashboard from "./pages/ArtistDashboard";
import Dropdown from "./components/Dropdown";

const App = () => {
  const data = [
    { name: "A", value: 1 },
    { name: "B", value: 2 },
    { name: "C", value: 3 },
  ];

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <FanNavBar />
        <Dropdown options={data} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}

          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/artist-dashboard" element={<ArtistDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
