// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import ArtistData from "../ArtistData";
import { useState } from "react";
import Container from "../StyledElements/Container";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const ArtistSignup = () => {
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
      <Container>
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

        <hr />

        <h3>Welcome {user.email} </h3>
      </Container>
    </>
  );
};

// const ArtistName = styled.input``;
// const Username = styled.input``;
// const Email = styled.input``;
// const Password = styled.input``;

export default ArtistSignup;
