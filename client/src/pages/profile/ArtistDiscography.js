import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./ArtistDiscography.css";

// components
import ArtistDashboard from "../dashboard/ArtistDashboard";

const ArtistDiscography = ({ artist }) => {
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
    <>
      <div className="artist-discography">
        <div className="content-container">
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
                <h1 className="album-name">{album.name}</h1>
              </div>
            );
          })}
        </div>
        <ArtistDashboard />
      </div>
    </>
  );
};

export default ArtistDiscography;
