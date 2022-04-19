// ArtistMusic, ArtistShows components

// The Artist page defaults to the "music" tab in the menubar, which displays a grid of the artist's discography.
// import { NavLink } from "react-router-dom";

// styles & images
import "./ArtistProfile.css";
// import AlvvaysBanner from "../../assets/alvvays/banner.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistProfile = () => {
  const [error, setError] = useState(false);
  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  useEffect(() => {
    fetch(`/api/artists/${artistId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setArtist(data.body);
        console.log(data.body);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  }, [artistId]);

  console.log(artistId);

  return (
    <>
      {artist && (
        <div className="artist-profile">
          {/* <img className="banner-img" src={AlvvaysBanner} alt="" /> */}
          <nav className="menu">navbar</nav>

          {/* SIDEBAR */}
          <div className="right-column">
            {/* <ArtistBio /> */}
            <div className="profile-pic"></div>
            <img
                height="150px"
                width="150px"
                src={artist.images[0].url}
                alt=""
              />
            <div className="artist">{artist.name}</div>
            <div className="location">Toroonto</div>
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
      )}
    </>
  );
};

export default ArtistProfile;
