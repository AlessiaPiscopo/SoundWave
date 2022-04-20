import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./ArtistDashboard.css";

// components
import UploadAlbumForm from "./UploadAlbumForm";

// TODO: make artist dashboard same as artist profile page, BUT if currentUser, add buttons/options to EDIT profile, the VIEW profile preview
// maybe: account icon shows 2 options:
//   dashboard
//   view profile

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
      <h1 className="title">My Dashboard</h1>

      {/* <h2>Welcome {user.email}! This is your dashboard.</h2> */}

      <p className="add-new">Add new: </p>
      <div className="add-new-container">
        <button onClick={handleAlbumClicked} className="btn action-btn">
          album
        </button>

        <button className="btn action-btn">track</button>

        <button className="btn action-btn">show</button>

        <button className="btn action-btn">merch</button>

        {addAlbumClicked && <UploadAlbumForm />}
      </div>
    </div>
  );
};

export default ArtistDashboard;
