import { useState, useEffect } from "react";

// firebase
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

// getDocs() steps:

// create a reference to a collection
// collection() takes two args: (db name, collection name) and returns a reference to the collection

// get documents using that ref and the getDocs() method
// getDocs returns a promise and takes a snapshot of the collection at that moment in time

// cycle through docs in the snapshot and push each result object into the results array
// the result object contains {doc id, doc data}

const ExploreByArtist = () => {
  const [artistList, setArtistList] = useState(null);

  useEffect(() => {
    const ref = collection(db, "artists");

    getDocs(ref)
      .then((snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setArtistList(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {artistList &&
        artistList.map((artist) => {
          return <div key={artist.id}>{artist.artistName}</div>;
        })}
    </>
  );
};

export default ExploreByArtist;

// import { useState } from "react";
// import { NavLink, useParams } from "react-router-dom";

// const ExploreByArtist = () => {
//   const [error, setError] = useState(false);
//   const [artist, setArtist] = useState(null);
//   const { artistId } = useParams();

//   const handleClick = (artistId) => {
//     fetch(`/api/artists/${artistId}`)
//       .then((res) => res.json())
//       .then(({ data }) => {
//         setArtist(data);
//         console.log(data);
//       })
//       .catch((err) => {
//         setError(error);
//         console.log(err);
//       });
//   };

//   return (
//     <div className="explore-by-artist">
//       <p>Explore by Artist</p>
//       {/* <button onClick={() => handleClick("rock")}>Whitney</button> */}
//       <NavLink to={`/artists/${artistId}`} onClick={handleClick}>
//         Whitney
//       </NavLink>

//       {artist && (
//         <div className="artist-grid">
//           <div>{artist.body.name}</div>
//           <img src={artist.body.icons[0].url} alt="" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExploreByArtist;
