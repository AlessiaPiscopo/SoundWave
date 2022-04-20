import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// firebase imports
import { auth, db } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const signup = (artistName, email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("User signed up!", userCredentials.user);
        addUserToFirestore(artistName, email);
        // we use the "LOGIN" action here as well, because when Firebase Auth signs a user up, it automatically logs them in as well
        dispatch({ type: "LOGIN", payload: userCredentials.user });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const addUserToFirestore = async (artistName, email) => {
    try {
      addDoc(collection(db, "users"), {
        artistName: artistName,
        email: email,
      });
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return { error, signup };
};
