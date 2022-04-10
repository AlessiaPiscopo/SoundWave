import { useState } from "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import ArtistSignUp from "../components/SignUp/ArtistSignUp";
import FanSignUp from "../components/SignUp/FanSignUp";

const SignUp = () => {
  const [artistBtnClicked, setArtistBtnClicked] = useState(false);
  // const [fanBtnClicked, setFanBtnClicked] = useState(false);

  const handleArtistBtnClick = () => {
    setArtistBtnClicked(true);
  };
  const handleFanBtnClick = () => {
    setArtistBtnClicked(false);
  };

  return (
    <>
      <Container>
        <header>Sign Up As</header>
        <ArtistOption>
          <p>
            Sell directly to your fans with total control over your music and
            pricing. Easy access to your customers' data, real-time stats, music
            chart reporting, and more.
          </p>
          <button onClick={handleArtistBtnClick}>Artist</button>
        </ArtistOption>

        <FanOption>
          <p>
            Follow your favorite artists, keep a wishlist, get instant streaming
            of your purchases, showcase your collection, and explore the music
            of like-minded fans.
          </p>
          <button onClick={handleFanBtnClick}>Fan</button>
        </FanOption>
      </Container>
      {/* {artistBtnClicked ? <ArtistSignUp /> : <FanSignUp />} */}
    </>
  );
};

const ArtistOption = styled(Container)``;
const FanOption = styled(Container)``;

export default SignUp;
