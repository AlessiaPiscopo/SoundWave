import { createContext, useReducer, useEffect } from "react";

// firebase imports
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

// our authReducer function takes two arguments: the state and a list of actions; it fires when we dispatch an action in our app
// it looks at the given an action type and fires the corresponding case, which updates the state object by spreading the current state and overriding the specified property
export const authReducer = (state, action) => {
  switch (action.type) {
    // sets user property to the action payload (the user that is logged in)
    case "LOGIN":
      return { ...state, user: action.payload };

    // sets user back to null
    case "LOGOUT":
      return { ...state, user: null };

    // when Firebase Auth is ready, sets user to the action payload--so, the user if they're logged in, or null if not
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };

    // return current state if no cases matched
    default:
      return state;
  }
};

// will wrap around the root component, App.js
export const AuthContextProvider = ({ children }) => {
  // to the useReducer hook, we pass two arguments: the authReducer function, and the initial state
  // authIsReady changes to true when we make the initial connection to Firbase Auth, i.e. when it first figures out if a user is logged in or not
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // the useEffect will fire the unsub function immediately upon render
  // we want this so that the onAuthStateChanged method can connect to Firebase Auth immediately using the auth object, letting it figure out whether a user is logged in or not
  // we pass it the user as an argument, whose value will be either that user or null
  // it then sets the payload to the user, so that we can dispatch our AUTH_IS_READY action on the user variable!
  // finally, we unsubscribe from changes, so that the function doesn't fire again when there is another state change

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    })
  }, []);

  console.log("AuthContext state:", state);

  return (
    // spread the properties of the state and pass is to App.js, making it the global state
    // also pass the dispatch function
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
