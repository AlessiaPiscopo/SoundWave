import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/StyledElements/Container";

const Login = () => {
  return (
    <>
      <Container>
        <header>Login</header>
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

          <button className="login">Login</button>

          <div>
            Don't have an account yet?
            <NavLink to="/signup">Sign up here</NavLink>.
          </div>
        </form>
      </Container>
    </>
  );
};

const Username = styled.input``;
const Email = styled.input``;
const Password = styled.input``;

export default Login;
