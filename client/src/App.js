import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ArtistProfile from "./pages/profile/ArtistProfile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/artist/signup">
            <Signup />
          </Route>

          <Route exact path="/artist/login">
            <Login />
          </Route>

          <Route exact path="/artist/profile">
            <ArtistProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
