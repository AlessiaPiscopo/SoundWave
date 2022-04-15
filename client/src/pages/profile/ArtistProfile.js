// The Artist page defaults to the "music" tab in the menubar, which displays a grid of the artist's discography.

import ArtistMusic from "../components/Artist/ArtistMusic";
import ArtistShows from "../components/Artist/ArtistShows";

const ArtistProfile = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="banner"></div>
          <div className="menu-bar">
            <ArtistMusic />
            <div className="artist-merch"></div>
            <div className="artist-video"></div>
            <ArtistShows />
            <div className="artist-community"></div>
          </div>
        </div>

        <div className="right-column">
          {/* <ArtistBio /> */}
          <div className="profile-pic"></div>
          <div className="artist">Boy Pablo</div>
          <div className="location">Bergen, Norway</div>
          <button>Follow</button>
          <div className="about-me-blurb"></div>
          <div className="socials"></div>
          <div className="artist-shows-preview">
            {/* List of shows... first 2-3 dates... "more shows..." link to <ArtistShows /> */}
          </div>
          <div className="discography-preview">
            {/* Same as shows? ... "more releases..." */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistProfile;
