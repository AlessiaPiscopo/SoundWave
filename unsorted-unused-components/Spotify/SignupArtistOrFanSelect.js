// use for signup modal

import { useState } from "react";
import ArtistSignup from "../components/SignUp/ArtistSignup";
import FanSignup from "../components/SignUp/FanSignup";

const SignupArtistOrFanSelect = () => {
  const [artistClicked, setArtistClicked] = useState(false);
  const [fanClicked, setFanClicked] = useState(false);

  const handleArtistClick = () => {
    setArtistClicked(true);
  };
  const handleFanClick = () => {
    setFanClicked(true);
  };

  if (artistClicked) {
    return <ArtistSignup />;
  } else if (fanClicked) {
    return <FanSignup />;
  }

  return (
    <div className="signup">
      <div className="signup-container">
        <header>Sign Up As</header>
        <div className="artist-option">
          <p>
            Sell directly to your fans with total control over your music and
            pricing. Easy access to your customers' data, real-time stats, music
            chart reporting, and more.
          </p>
          <button onClick={handleArtistClick}>Artist</button>
        </div>

        <div className="fan-option">
          <p>
            Follow your favorite artists, keep a wishlist, get instant streaming
            of your purchases, showcase your collection, and explore the music
            of like-minded fans.
          </p>
          <button onClick={handleFanClick}>Fan</button>
        </div>
      </div>
    </div>
  );
};

export default SignupArtistOrFanSelect;
