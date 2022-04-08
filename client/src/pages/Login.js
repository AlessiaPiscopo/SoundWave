import styled from "styled-components";

const Login = () => {
  return (
    <>
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

        <div>Don't have an account yet? Sign up here.</div>
      </form>
    </>
  );
};

const Username = styled.input``;
const Email = styled.input``;
const Password = styled.input``;
// const SignUpBtn = styled.button``;

export default Login;
