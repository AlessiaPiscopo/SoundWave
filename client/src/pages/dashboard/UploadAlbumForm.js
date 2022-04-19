import { useState } from "react";
import "./UploadAlbumForm.css";
import { db } from "../../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

const UploadAlbumForm = () => {
  const [newAlbum, setNewAlbum] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    await addDoc(collection(db, "albums"), { title: newAlbum });

    // clear form input field
    setNewAlbum("");
  };

  return (
    <div className="upload-album-form">
      <form onSubmit={handleSubmit}>
        <span>add album title:</span>
        <input
          type="text"
          required
          onChange={(ev) => setNewAlbum(ev.target.value)}
          value={newAlbum}
        />
      </form>
    </div>
  );
};

export default UploadAlbumForm;
