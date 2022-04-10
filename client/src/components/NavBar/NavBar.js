import styled from "styled-components";
import SearchBar from "./SearchBar";
import { RiSoundModuleFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <Logo>
          <RiSoundModuleFill />
          Delay
        </Logo>
      </NavLink>
      <SearchBar />
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
  gap: 1rem;
  min-height: fit-content;
  background-color: var(--color-almost-white);
  padding: 15px;
`;

const Logo = styled.h3`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Nav = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)``;

export default NavBar;
