import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ArtistDashboard from "./pages/dashboard/ArtistDashboard";
import ArtistProfile from "./pages/profile/ArtistProfile";
import ExploreByCategory from "./components/ExploreByCategory";

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {authIsReady && (
            <>
              {/* {user && <Redirect to="/login" />} */}
              <Route exact path="/signup">
                <Signup />
                {/* {!user && <Signup />} */}
              </Route>

              <Route path="/login">
                <Login />
                {/* {!user && <Login />} */}
                {/* {user && <Redirect to="/dashboard" />} */}
              </Route>

              <Route path="/dashboard">
                <ArtistDashboard />
              </Route>

              <Route path="/profile">
                <ArtistProfile />
              </Route>
            </>
          )}

          <Route path="/categories/:categoryId">
            <div>hello</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
