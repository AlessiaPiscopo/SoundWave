import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import SearchBar from "../SearchBar";
// import { BsSun, BsMoonStars } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-img-white.png";

const NavBar = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">
        <Logo>
          {/* <img src={logoWhite} height="50px" alt="sound wave" /> */}
          <img src={logo} height="50px" alt="sound wave" />
          SoundWave
        </Logo>
      </StyledNavLink>
      {/* <SearchBar /> */}
      <Nav>
        <StyledNavLink to="/signup">sign up</StyledNavLink>
        <StyledNavLink to="/login">log in</StyledNavLink>
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
  background-color: transparent;
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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-almost-black);
`;

export default NavBar;
