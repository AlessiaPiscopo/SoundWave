import { useRealtimeListener } from "../hooks/useRealtimeListener";
import { Link } from "react-router-dom";
import "./ExploreByArtist.css";

const ExploreByArtist = () => {
  const { documents: users } = useRealtimeListener("users");

  return (
    <>
      <div className="featured-artists">
        <h1 className="title">New & Featured Artists</h1>
        <ul className="artist-list">
          {users &&
            users.map((user) => {
              return (
                <Link
                  to={`/artists/${user.id}`}
                  key={user.id}
                  className="list-item"
                >
                  {user.artistName}
                </Link>
              );
            })}
          {/* <Link className="list-item" to="">
            TOPS
          </Link>
          <Link className="list-item" to="">
            Alice Phoebe Lou
          </Link>
          <Link className="list-item" to="">
            Alvvays
          </Link> */}
        </ul>
      </div>
    </>
  );
};

export default ExploreByArtist;
