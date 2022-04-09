// the useEffect:

// When we open the app, we check if we have a hash or we already have a token saved in our localStorage.
// If we do have a token stored, we simply continue by setting our token state variable.
// If we don't have a token, we check if we have a hash. If so we perform tasks on that string to extract the token.

//     We substring the hash at the beginning. We split the String by the ampersands. Then we search vor that element which contains access_token. This element than again will be split at the equal sign. The array we get contains the token at index 1.

// Once we got the token we save it in our localStorage and reset the hash.

import { useEffect, useState } from "react";

const HomePage = () => {
  // const CLIENT_ID = "8c06763554494aec9c95bbc12997589f";
  // const REDIRECT_URI = "http://localhost:3000";
  // const RESPONSE_TYPE = "token";

  // const [token, setToken] = useState("");
  // const [searchKey, setSearchKey] = useState("");
  // const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }

  //   setToken(token);
  // }, []);

  // To logout we simply create a function which removes the token from our localStorage as well as we set the state token back to an empty string.
  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  return (
    <>
      <header>Home</header>

      {/* {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )} */}
    </>
  );
};

export default HomePage;
