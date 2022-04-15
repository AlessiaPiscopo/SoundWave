import "./Home.css";
import styled from "styled-components";
import pedalsBg from "../../assets/images/pedals-bg.jpg";
// import logoWhite from "../../assets/images/logo-img-white.png";

const Homepage = () => {
  return (
    <PageWrapper className="page-wrapper">
      <div className="black-overlay"></div>
      <div className="welcome-container">
        <p className="welcome-text">Welcome to</p>
        <div className="logo-container">
          {/* <img className="logo-img" src={logoWhite} alt="logo-img" /> */}
          <div className="logo-text">SoundWave</div>
        </div>
        <p className="about">
          Where fans can discover, connect with, and directly support the
          artists they love.
        </p>
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
