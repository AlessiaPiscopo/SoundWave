import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../StyledElements/Container";

const FanSignUp = () => {
  return (
    <>
      <Container>
      <header>Sign Up As A Fan</header>
        <form>
          <Username
            type="text"
            name="username"
            required
            placeholder="Username"
            // ref={username}
            // onChange={handleChange}
          ></Username>
          <Email
            type="email"
            name="email"
            required
            placeholder="Email Address"
            // ref={username}
            // onChange={handleChange}
          ></Email>
          <Password
            type="password"
            name="password"
            required
            placeholder="Password"
            // ref={password}
            // onChange={handleChange}
          ></Password>
          <ConfirmPassword
            type="password"
            name="confirm-password"
            required
            placeholder="Confirm Password"
            // ref={confirmPassword}
            // onChange={handleChange}
          ></ConfirmPassword>

          <button className="sign-up">Sign Up</button>

          <div>
            Already have an account?
            <NavLink to="/login">Log in here</NavLink>.
          </div>
        </form>
      </Container>
    </>
  );
};

const Username = styled.input``;
const Email = styled.input``;
const Password = styled.input``;
const ConfirmPassword = styled.input``;

export default FanSignUp;