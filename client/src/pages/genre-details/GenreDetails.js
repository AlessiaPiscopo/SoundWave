import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./GenreDetails.css";

const GenreDetails = () => {
  const [error, setError] = useState(false);
  const [artistsByGenre, setArtistsByGenre] = useState([]);
  const { genre } = useParams();

  useEffect(() => {
    fetch(`/api/search/${genre}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setArtistsByGenre(data.body.artists.items);
        console.log(data.body.artists.items);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  }, []);

  return (
    <div className="genre-details">
      <p>Browse Artists in {genre}</p>

      <div className="artists-grid">
        {artistsByGenre.map((artist, index) => {
          return (
            <div key={`${artist}${index}`} className="artist-card">
              <div className="artist-name">{artist.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreDetails;
