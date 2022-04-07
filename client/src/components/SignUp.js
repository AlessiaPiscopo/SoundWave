// TODO: auth0 vs bcrypt

// ideas:
// - show/hide eye icon
// - confirm pass pops up after typing pass

const SignUp = () => {
  return (
    <>
      <header>Sign Up</header>
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
          ref={confirmPassword}
          onChange={handleChange}
        ></ConfirmPassword>

        <button className="sign-up">Sign Up</button>
      </form>
    </>
  );
};

const Username = styled.input``;
const Email = styled.input``;
const Password = styled.input``;
const ConfirmPassword = styled.input``;
// const SignUpBtn = styled.button``;

export default SignUp;
