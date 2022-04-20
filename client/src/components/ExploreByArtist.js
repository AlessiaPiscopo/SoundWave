// for GETTING documents
import { useCollection } from "../hooks/useCollection";
import { Link } from "react-router-dom";

const ExploreByArtist = () => {
  const { documents: artists } = useCollection("artists");

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
