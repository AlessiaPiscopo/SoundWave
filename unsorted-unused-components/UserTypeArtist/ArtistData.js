import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const ArtistData = () => {
  const [artists, setArtists] = useState([]);
  // first, we need to reference the collection we want to fetch
  const artistsCollectionRef = collection(db, "artists");

  // We need the artist data to load as soon as the user accesses our app. useEffect runs on every rerender
  useEffect(() => {
    const getArtists = async () => {
      const data = await getDocs(artistsCollectionRef);
      // map through the artists collection to set the artists array equal to an array that contains the document data (...doc.data()) and the document id (id: doc.id)
      setArtists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArtists();
  }, []);

  return (
    <>
      {/* display artist data */}
      {artists.map((artist) => {
        return (
          <div key={artist}>
            <p>Artist/Band Name: {artist.artistName}</p>
            <p>Email: {artist.login.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ArtistData;
