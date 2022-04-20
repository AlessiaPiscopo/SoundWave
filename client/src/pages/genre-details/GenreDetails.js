import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./GenreDetails.css";

const GenreDetails = () => {
  const [error, setError] = useState(false);
  const [artistsByGenre, setArtistsByGenre] = useState([]);
  const [artistId, setArtistId] = useState(null);
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
      <h1 className="title">{genre}</h1>
      <div className="artists-grid">
        {artistsByGenre.map((artist, index) => {
          return (
            <div key={`${artist}${index}`} className="artist-card">
              <img
                height="250px"
                width="250px"
                src={artist.images[0].url}
                alt=""
              />
              <div className="artist-name">{artist.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreDetails;
