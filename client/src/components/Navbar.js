import { Link } from "react-router-dom";
import styled from "styled-components";
// import SearchBar from "../SearchBar";
// import { BsSun, BsMoonStars } from "react-icons/bs";
import SoundWaveWhite from "./../assets/images/logo-img-white.png";

const Navbar = () => {
  return (
    <Wrapper>
      {/* Logo & link to Home */}

      <Link to="/">
        <Logo>
          <img src={SoundWaveWhite} height="50px" alt="SoundWave logo" />
          SoundWave
        </Logo>
      </Link>

      <Nav>
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
        <button>log out</button>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  min-height: fit-content;
  /* background-color: var(--color-almost-white); */
  /* background-color: transparent; */
  padding: 15px 30px 15px 15px;
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: Dokdo, "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-weight: bold;
`;

const Nav = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
  text-decoration: none;
`;

// const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   color: var(--color-almost-black);
// `;

export default Navbar;
