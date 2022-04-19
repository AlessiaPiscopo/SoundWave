import { NavLink } from "react-router-dom";

// styles
import "./ArtistSidebar.css";

const ArtistSidebar = ({ artist }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* <ArtistBio /> */}
        <div className="profile-pic">
          <img src={artist.images[0].url} alt="" />
        </div>
        <div className="artist-name">{artist.name}</div>
        <div className="location">SomeCity, AB</div>
        <button>Follow</button>
        <div className="about-me-blurb">
          This is our bio blah blah dadada cool
        </div>
        <div className="socials">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="artist-shows-preview">
          {/* List of shows... first 2-3 dates... "more shows..." link to <ArtistShows /> */}
        </div>
        <div className="discography-preview">
          {/* Same as shows? ... "more releases..." */}
        </div>
      </div>
      <nav className="links">
        <ul>
          {/* artist && */}
          <li>
            <NavLink to="/artist-dashboard"> </NavLink>
          </li>
          {/* fan && */}
          <li>
            <NavLink to="/fan-dashboard"> </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ArtistSidebar;
