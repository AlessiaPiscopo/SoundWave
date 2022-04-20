import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles & images
import "./ArtistProfile.css";

// components
import ArtistDiscography from "./ArtistDiscography";
import ArtistSidebar from "./ArtistSidebar";

// The Artist page defaults to the "music" tab in the menubar, which displays a grid of the artist's discography.

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
            <div className="banner">
              <span className="banner-text"></span>
            </div>
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
