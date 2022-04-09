
// create a Spotify authorization URL
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8c06763554494aec9c95bbc12997589f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login2 = () => {
  return (
    <div>
      <a href={AUTH_URL}>Login</a>
    </div>
  );
};

export default Login2;
