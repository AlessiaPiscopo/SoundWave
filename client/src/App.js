import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages & components
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
