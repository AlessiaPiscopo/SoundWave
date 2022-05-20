// components
import Discover from "../../components/Discover";

// styles & images
import "./Home.css";
import styled from "styled-components";
import pedalsBg from "../../assets/images/pedals-bg.jpg";

const Homepage = () => {
  return (
    <div>
      <Background className="background">
        <div className="black-overlay"></div>
        <div className="welcome-container">
          <p className="welcome-text">Welcome to</p>
          <div className="logo-container">
            <div className="logo-text">SoundWave</div>
          </div>
          <p className="about">
            An online music community where artists can showcase their work,
            discover new music, and build meaningful connections.
            {/* Artists & Fans: An online record store and music community where passionate fans discover, connect with, and directly support the artists they love. */}
          </p>
        </div>
      </Background>
      <Discover />
    </div>
  );
};

const Background = styled.div`
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
