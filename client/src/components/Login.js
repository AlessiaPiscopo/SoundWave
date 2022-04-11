// Login Link

import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8c06763554494aec9c95bbc12997589f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <div>
      <a href={AUTH_URL}>log in with Spotify</a>
    </div>
  );
};

export default Login;

// Link to page that states how our app can view the user's personal data, prompting them to Agree or Cancel login.

// On click, user is redirected to app homepage. The URL now includes a login code, that we will convert to an access_token and a refresh_token, which we ultimately need to authenticate the user.

// We use a library called "Spotify Web API Node" to help us with this conversion. The library also contains helper functions that allow us to make calls to the API more easily.

// We need to convert the code on the server, since it requires our clientSecret.

// *Note: See https://www.npmjs.com/package/spotify-web-api-node for list of features
