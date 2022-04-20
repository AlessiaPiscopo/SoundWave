import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./ArtistDiscography.css";

const ArtistDiscography = () => {
  const [error, setError] = useState(false);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const { artistId } = useParams();

  useEffect(() => {
    fetch(`/api/artists/${artistId}/albums`)
      .then((res) => res.json())
      .then(({ data }) => {
        setArtistAlbums(data);
        console.log(data);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  }, [artistId]);

  return (
    <div className="artist-discography">
      {artistAlbums.map((album) => {
        return (
          <div className="album-card">
            <img
              className="album-cover"
              height="200px"
              width="200px"
              src={album.images[0].url}
              alt=""
            />
            <div className="album-name">{album.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistDiscography;
