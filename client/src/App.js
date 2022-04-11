// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import FanNavBar from "./components/NavBar/FanNavBar";
import GlobalStyles from "./GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";

// Every time we access the page, we extract the code from the URL
const code = new URLSearchParams(window.location.search).get("code");

const App = ({ code}) => {
  return code ? <Dashboard code={code} /> : <Login />;
};

export default App;

// import SignUp from "./pages/SignUp";
// import Profile from "./pages/Profile";
// import Artist from "./pages/Artist";

/* <Route exact path="/" element={<Homepage code={code} />} /> */
/* <Route exact path="/login" element={<Login />} /> */
/* <Route exact path="/signup" element={<SignUp />} /> */
/* <Route exact path="/profile" element={<Profile />} /> */
/* <Route exact path="/artist" element={<Artist />} /> */

// {code ? (
//   <Route
//     exact
//     path="/artist-dashboard"
//     element={<ArtistDashboard code={code} />}
//   />
// ) : (
//   <Route exact path="/login" element={<Login />} />
// )}

/* <Routes>
          {code ? (
            <Route
              exact
              path="/dashboard"
              element={<Dashboard code={code} />}
            />
          ) : (
            <Route exact path="/" element={<Homepage code={code} />} />
          )}
        </Routes> */

// <>
{
  /* <BrowserRouter> */
}
{
  /* <GlobalStyles /> */
}
{
  /* <FanNavBar /> */
}
{
  /* </BrowserRouter> */
}
// </>
