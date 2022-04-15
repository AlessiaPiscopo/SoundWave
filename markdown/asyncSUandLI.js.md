// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import ArtistData from "../ArtistData";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../client/src/firebase/firebase-config";

const ArtistSignupAndLogin = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};

  const logout = async () => {};

  return (
    <>
      <div>
        <h3>Sign Up As An Artist</h3>
        <div>
          {/* <input placeholder="Artist/Band Name" /> */}
          <input
            placeholder="Email Address"
            onChange={(ev) => {
              setRegisterEmail(ev.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(ev) => {
              setRegisterPassword(ev.target.value);
            }}
          />
          <button className="sign-up" onClick={register}>
            Sign Up
          </button>
        </div>

        <div>
          <h3>Login instead</h3>
          <input
            placeholder="Email Address"
            onChange={(ev) => {
              setLoginEmail(ev.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(ev) => {
              setLoginPassword(ev.target.value);
            }}
          />
          <button className="log-in">Log In</button>
          {/* Already have an account? */}
          {/* <NavLink to="/login">Log in here</NavLink>. */}
        </div>

        <p>Welcome {user.email} </p>
      </div>
    </>
  );
};

export default ArtistSignupAndLogin;
