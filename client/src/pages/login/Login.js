import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.css";

const Login = () => {
  const { error, login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(email, password);
    console.log(email, password);
  };

  return (
    <div className="login">
      <h2 className="title">Welcome Back to SoundWave</h2>
      <form className="form-container" onSubmit={handleSubmit}>
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

        <button className="btn">log in</button>
      </form>

      <p className="signup-instead">
        Don't have an account yet? Create one{" "}
        <NavLink to="/artist/signup" className="nav-link">
          here
        </NavLink>
        .
      </p>

      {error && (
        <p style={{ color: "red", textAlign: "center", paddingTop: "30px" }}>
          Error! Wrong email or password. Please try again.
        </p>
      )}
    </div>
  );
};

export default Login;
