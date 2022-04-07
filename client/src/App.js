import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

import HomePage from "./components/Home/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="main-wrapper">
        <GlobalStyles />
        <div>hello</div>

        <Switch>
        <Route to="/" component={HomePage} />

        <div className="feed"></div>
        <div className="profile"></div>
        </Switch>
      </div>
      </BrowserRouter>
    </>
  );
};

// const Homepage = styled.div``;
// const Feed = styled.div``;
// const Profile = styled.div``;

export default App;
