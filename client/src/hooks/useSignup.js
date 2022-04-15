import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// firebase imports
import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("User signed up!", userCredentials.user);
        // we use the "LOGIN" action here as well, because when Firebase Auth signs a user up, it automatically logs them in as well
        dispatch({ type: "LOGIN", payload: userCredentials.user });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return { error, signup };
};
