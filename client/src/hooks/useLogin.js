import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// firebase imports
import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("User logged in", userCredentials.user);
        dispatch({ type: "LOGIN", payload: userCredentials.user });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return { error, login };
};
