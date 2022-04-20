import { useState } from "react";
import "./UploadAlbumForm.css";
import UploadAlbumCover from "./UploadAlbumCover";
import { useAuthContext } from "../../hooks/useAuthContext";

// firebase
import { db, storage } from "../../firebase/firebase-config";

import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadAlbumForm = () => {
  const { user } = useAuthContext();
  // state for the entire album form??
  // this should be newAlbumName:
  // const [newAlbum, setNewAlbum] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");

  const usersCollectionRef = collection(db, "users");

  // add new album to "albums" collection
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await addDoc(collection(db, "albums"), {
      albumName: albumName,
      artistName: artistName,
    });

    // clear form input field
    setAlbumName("");

    // post new album to "users" collection
    const data = await getDocs(usersCollectionRef);
    data.docs.map((document) => {
      // console.log({ ...doc.data(), id: doc.id });
      const documentRef = doc(db, "users", document.id);
      console.log(document.data().email);
      if (user.email === document.data().email) {
        // same pattern for rest of files/ stuff to update:
        updateDoc(documentRef, {
          albums: {
            // document.data().albums.push
            albumName: "hello",
          },
        });
      }
    });
  };

  return (
    <div className="upload-album">
      <form className="form" onSubmit={handleSubmit}>
        <p className="upload-album-title">Upload An Album</p>

        <UploadAlbumCover />

        <div className="form-item">
          <span className="album-name">album name: </span>
          <input
            className="input-field"
            type="text"
            // required
            onChange={(ev) => setArtistName(ev.target.value)}
            value={artistName}
          />
        </div>

        <div className="form-item">
          <span className="album-artist">artist name: </span>
          <input
            type="text"
            className="input-field"
            // required
            onChange={(ev) => setAlbumName(ev.target.value)}
            value={albumName}
          />
        </div>
        {/* <span className="album-cover">album cover:</span> */}
        {/* <input
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
        /> */}
        {/* <button onClick={uploadAlbumCover}>Upload Image</button> */}

        <button className="btn">submit</button>
      </form>
      {/* <UploadAlbumTracks /> */}

      {/* <UploadAlbumCover2 /> */}
    </div>
  );
};

export default UploadAlbumForm;
