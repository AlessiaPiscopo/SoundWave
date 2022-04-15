import { useState } from "react";

// firebase imports
import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("User signed up!", userCredentials.user);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return { error, signup };
};
