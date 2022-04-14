import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages & components
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
// import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/welcome">
            <Welcome />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
