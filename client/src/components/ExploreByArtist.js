import { useRealtimeListener } from "../hooks/useRealtimeListener";
import { Link } from "react-router-dom";

const ExploreByArtist = () => {
  const { documents: artists } = useRealtimeListener("artists");

  return (
    <>
      {artists &&
        artists.map((artist) => {
          return (
            <Link to={`/artists/${artist.id}`} key={artist.id}>
              {artist.artistName}
            </Link>
          );
        })}
    </>
  );
};

export default ExploreByArtist;
