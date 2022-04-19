// ArtistMusic, ArtistShows components

// The Artist page defaults to the "music" tab in the menubar, which displays a grid of the artist's discography.
import { NavLink } from "react-router-dom";

// styles & images
import "./ArtistProfile.css";
// import AlvvaysBanner from "../../assets/alvvays/banner.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistDiscography from "./ArtistDiscography";
import ArtistSidebar from "./ArtistSidebar";

const ArtistProfile = () => {
  const [error, setError] = useState(false);
  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  useEffect(() => {
    fetch(`/api/artists/${artistId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setArtist(data);
        console.log(data);
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
          <header>
            <div className="banner-img">~~~~~~~banner img~~~~~~~~~</div>
            {/* TODO: change spans to navlinks */}
            <nav className="menu-bar">
              <span>music</span>
              <span>shows</span>
              <span>merch</span>
              <span>community</span>
            </nav>
          </header>

          <div className="cols">
            <ArtistDiscography />
            <ArtistSidebar artist={artist} />
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistProfile;
