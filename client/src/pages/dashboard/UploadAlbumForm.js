import { useState } from "react";
import "./UploadAlbumForm.css";
import UploadAlbumCover from "./UploadAlbumCover";
// import UploadAlbumCover2 from "./UploadAlbumCover2";
// import { useAuthContext } from "../hooks/useAuthContext";
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
  const [newAlbum, setNewAlbum] = useState("");
  const usersCollectionRef = collection(db, "users");

  // const [newAlbumCover, setNewAlbumCover] = useState(null);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await addDoc(collection(db, "albums"), { albumName: newAlbum });
    // clear form input field
    setNewAlbum("");
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
    <div className="upload-album-form">
      <form onSubmit={handleSubmit}>
        <span className="album-name">album name:</span>
        <input
          type="text"
          required
          onChange={(ev) => setNewAlbum(ev.target.value)}
          value={newAlbum}
        />
        {/* <span className="album-cover">album cover:</span> */}
        {/* <input
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
        /> */}
        {/* <button onClick={uploadAlbumCover}>Upload Image</button> */}

        <UploadAlbumCover />
        <button>submit</button>
      </form>
      {/* <UploadAlbumTracks /> */}

      {/* <UploadAlbumCover2 /> */}
    </div>
  );
};

export default UploadAlbumForm;
