// firebase imports
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";

// the signOut function from firebase auth logs out the current user
export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
