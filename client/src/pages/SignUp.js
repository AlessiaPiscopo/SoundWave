import { useState } from "react";
import styled from "styled-components";
import Container from "../components/StyledElements/Container";
import ArtistSignUp from "../components/SignUp/ArtistSignUp";
import FanSignUp from "../components/SignUp/FanSignUp";

const SignUp = () => {
  const [artistClicked, setArtistClicked] = useState(false);
  const [fanClicked, setFanClicked] = useState(false);

  const handleArtistClick = () => {
    setArtistClicked(true);
  };
  const handleFanClick = () => {
    setFanClicked(true);
  };

  if (artistClicked) {
    return <ArtistSignUp />;
  } else if (fanClicked) {
    return <FanSignUp />;
  }

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
          <button onClick={handleArtistClick}>Artist</button>
        </ArtistOption>

        <FanOption>
          <p>
            Follow your favorite artists, keep a wishlist, get instant streaming
            of your purchases, showcase your collection, and explore the music
            of like-minded fans.
          </p>
          <button onClick={handleFanClick}>Fan</button>
        </FanOption>
      </Container>
    </>
  );
};

const ArtistOption = styled(Container)``;
const FanOption = styled(Container)``;

export default SignUp;
