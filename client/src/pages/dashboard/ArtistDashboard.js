import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// components
import UploadAlbumForm from "./UploadAlbumForm";

const ArtistDashboard = () => {
  const { user } = useAuthContext();
  const [addAlbumClicked, setAddAlbumClicked] = useState(false);
  //   const [addTrackClicked, setAddTrackClicked] = useState(false);

  const handleAlbumClicked = () => {
    setAddAlbumClicked(true);
  };
  //   const handleTrackClicked = () => {
  //     setAddTrackClicked(true);
  //   };

  return (
    <div className="artist-dashboard">
      <h2>Welcome {user.email}! This is your dashboard.</h2>

      <div className="column-1">
        <div className="add-album-or-track">
          <button onClick={handleAlbumClicked} className="btn">
            Add an album
          </button>

          {/* <button onClick={handleTrackClicked} className="btn">
            or add a track
          </button> */}

          {addAlbumClicked && <UploadAlbumForm />}
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;
