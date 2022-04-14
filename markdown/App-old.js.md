// App.js old

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Welcome/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup/Signup";
// import ArtistData from "./ArtistData";
// import NavBar from "./components/NavBar/NavBar";

// import Profile from "./pages/Profile";
// import Artist from "./pages/Artist";
// import ArtistDashboard from "./pages/ArtistDashboard";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <NavBar /> */}
          {/* <ArtistData /> */}
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/artist-dashboard" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
