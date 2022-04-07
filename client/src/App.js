import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route exact path="/" element={<HomePage />} />

          {/* <div className="feed">feed</div>
          <div className="profile">profile</div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

// const Homepage = styled.div``;
// const Feed = styled.div``;
// const Profile = styled.div``;

export default App;
