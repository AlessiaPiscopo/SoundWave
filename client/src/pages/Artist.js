// The Artist page defaults to the "music" tab in the menubar, which displays a grid of the artist's discography.

import ArtistMusic from "../components/Artist/ArtistMusic";
import ArtistShows from "../components/Artist/ArtistShows";

const Artist = () => {
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

        <div className="left-column">
          <>
            <div className="album-name">Soy Pablo</div>
            <div className="artist">by Boy Pablo</div>
          </>
          {/* <TrackPlayer /> */}
        </div>

        <div className="center-column"></div>

        <div className="right-column"></div>
      </div>
    </>
  );
};

export default Artist;
