import { useAuthContext } from "./useAuthContext";

// firebase imports
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";

// the signOut function from firebase auth logs out the current user
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        // we don't need a payload in this case because the user is null, so there is not value to send back
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
