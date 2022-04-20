// components
// import SearchByGenre from "../../components/SearchByGenre";
import GenreDropdown from "../../components/GenreDropdown";
// import ExploreByArtist from "../../components/ExploreByArtist";

// styles & images
import "./Home.css";
import styled from "styled-components";
import pedalsBg from "../../assets/images/pedals-bg.jpg";

const Homepage = () => {
  return (
    <PageWrapper className="page-wrapper">
      <div className="black-overlay"></div>
      <div className="welcome-container">
        <p className="welcome-text">Welcome to</p>
        <div className="logo-container">
          <div className="logo-text">SoundWave</div>
        </div>
        <p className="about">
          An online record store and music community where passionate fans
          discover, connect with, and directly support the artists they love.
        </p>
        <div className="learn-more">Discover</div>
        {/* <ExploreByGenre /> */}
        {/* <ExploreByArtist /> */}
        {/* <SearchByGenre /> */}
        <GenreDropdown />
        {/* <ExploreByArtist /> */}
      </div>
    </PageWrapper>
  );
};

// put in css--one-off styling
const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${pedalsBg}) no-repeat center center fixed;
  background-size: cover;
  position: relative;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -85px;
`;

export default Homepage;
