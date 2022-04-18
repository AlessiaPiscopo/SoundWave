import { useState } from "react";
import { NavLink } from "react-router-dom";

const ExploreByArtist = () => {
  const [error, setError] = useState(false);
  const [artist, setArtist] = useState(null);

  const handleClick = (artistId) => {
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
  };

  return (
    <div className="explore-by-artist">
      <p>Explore by Artist</p>
      {/* <button onClick={() => handleClick("rock")}>Whitney</button> */}
      <NavLink to={`/artists/${artistId}`} onClick={handleClick}>
        Whitney
      </NavLink>

      {artist && (
        <div className="artist-grid">
          <div>{artist.body.name}</div>
          <img src={artist.body.icons[0].url} alt="" />
        </div>
      )}
    </div>
  );
};

export default ExploreByArtist;
