import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Router>
        <div className="main-wrapper">
          <GlobalStyles />

          <Switch>
            <div className="homepage"></div>
            <div className="feed"></div>
            <div className="profile"></div>
          </Switch>
        </div>
      </Router>
    </>
  );
};

const Homepage = styled.div``;
const Feed = styled.div``;
const Profile = styled.div``;

export default App;
