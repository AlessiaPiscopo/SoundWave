import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import ArtistData from "../ArtistData";
import Container from "../StyledElements/Container";

const ArtistSignup = () => {
  const handleArtistSignup = async () => {
    console.log("form submitted");
    // return <ArtistData />;
  };

  return (
    <>
      <Container>
        <header>Sign Up As An Artist</header>

        <form>
          <ArtistName
            type="text"
            name="artist-name"
            // required
            placeholder="Artist/Band Name"
          ></ArtistName>
          <Username
            type="text"
            name="username"
            // required
            placeholder="Username"
            // ref={username}
            // onChange={handleChange}
          ></Username>
          <Email
            type="email"
            name="email"
            // required
            placeholder="Email Address"
            // ref={username}
            // onChange={handleChange}
          ></Email>
          <Password
            type="password"
            name="password"
            // required
            placeholder="Password"
            // ref={password}
            // onChange={handleChange}
          ></Password>
          {/* <ConfirmPassword
            type="password"
            name="confirm-password"
            required
            placeholder="Confirm Password"
            // ref={confirmPassword}
            // onChange={handleChange}
          ></ConfirmPassword> */}
          <button className="sign-up" onClick={handleArtistSignup}>
            Sign Up
          </button>
          <div>
            Already have an account?
            <NavLink to="/login">Log in here</NavLink>.
          </div>
        </form>
        <hr />
      </Container>
    </>
  );
};

const ArtistName = styled.input``;
const Username = styled.input``;
const Email = styled.input``;
const Password = styled.input``;
// const ConfirmPassword = styled.input``;

export default ArtistSignup;
