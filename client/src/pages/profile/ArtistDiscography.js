import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
    <ArtistDiscographyContainer className="artist-discography">
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
    </ArtistDiscographyContainer>
  );
};

const ArtistDiscographyContainer = styled.div`
  border: 2px solid green;
  /* width: 800px; */
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ArtistDiscography;
