import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./ArtistSidebar.css";

const ArtistSidebar = ({ artist }) => {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* <ArtistBio /> */}
        <div className="profile-pic">
          <img src={artist.images[0].url} alt="" />
        </div>
        <h1 className="artist-name">{artist.name}</h1>
        {/* <div className="location">SomeCity, AB</div> */}

        {/* {user ? <div>My Profile</div> : <button>Follow</button>} */}

        <div className="about-me-blurb">
          Hello this is a little bio section here's some info about me and my
          music.
        </div>
        <div className="socials">
          <ul></ul>
        </div>
        <div className="artist-shows-preview">
          {/* List of shows... first 2-3 dates... "more shows..." link to <ArtistShows /> */}
        </div>
        <div className="discography-preview">
          {/* Same as shows? ... "more releases..." */}
        </div>
      </div>
      {/* <nav className="links">
        <ul>
          <li>
            <NavLink to="/dashboard">My Dashboard</NavLink>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default ArtistSidebar;
