import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

// styles
import "./Signup.css";

const Signup = () => {
  const { error, signup } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [artistName, setArtistName] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    signup(artistName, email, password);
    console.log(artistName, email, password);
  };

  return (
    <div className="signup">
      <h2 className="title">Welcome to SoundWave</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {/* -------------------- */}

        <input
          required
          type="text"
          placeholder="artist name"
          onChange={(ev) => {
            setArtistName(ev.target.value);
          }}
          value={artistName}
        />

        {/* -------------------- */}

        <input
          required
          type="email"
          placeholder="email"
          onChange={(ev) => setEmail(ev.target.value)}
          value={email}
        />

        {/* -------------------- */}

        <input
          required
          type="password"
          placeholder="password"
          onChange={(ev) => setPassword(ev.target.value)}
          value={password}
        />

        {/* -------------------- */}

        <button className="btn">sign up</button>
        <p className="login-instead">
          Already have an account? Log in{" "}
          <NavLink to="/login" className="nav-link">
            here
          </NavLink>
          .
        </p>
        {error && (
          <p style={{ color: "red", textAlign: "center" }}>
            Error! Password must be at least 6 characters long.
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
