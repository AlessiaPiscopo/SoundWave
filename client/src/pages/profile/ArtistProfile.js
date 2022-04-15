// import { NavLink } from "react-router-dom";

// styles & images
import "./ArtistProfile.css";
import AlvvaysBanner from "../../assets/alvvays/banner.png";
// import AntisocialitesCover from "../../assets/alvvays/banner.png";


// ArtistMusic, ArtistShows components

// The Artist page defaults to the "music" tab in the menubar, which displays a grid of the artist's discography.

const ArtistProfile = () => {
  return (
    <>
      <div className="artist-profile">

          <img className="banner-img" src={AlvvaysBanner} alt="" />
          <nav className="menu">navbar</nav>


        <div className="right-column">
          {/* <ArtistBio /> */}
          <div className="profile-pic"></div>
          <div className="artist">Alvvays</div>
          <div className="location">Toronto, Ontario</div>
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
