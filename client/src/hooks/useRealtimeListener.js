import { useState, useEffect } from "react";

// firebase
import { db } from "../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

// set up realtime listener to see live updates when data changes
export const useRealtimeListener = (coll) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, coll);

    // unsubscribe when component unmounts
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [coll]);

  return { documents };
};

// getDocs() steps:

// create a reference to a collection
// collection() takes two args: (db name, collection name) and returns a reference to the collection

// get documents using that ref and the getDocs() method
// getDocs returns a promise and takes a snapshot of the collection at that moment in time

// cycle through docs in the snapshot and push each result object into the results array
// the result object contains {doc id, doc data}
