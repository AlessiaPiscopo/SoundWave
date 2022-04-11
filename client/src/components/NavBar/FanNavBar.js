import { NavLink } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { RiSoundModuleFill } from "react-icons/ri";
import { ThemeContext } from "../../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";
import Login from "../Login";

const FanNavBar = () => {
  const { toggleTheme, lightTheme } = useContext(ThemeContext);

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
        <Login />
        <StyledNavLink to="/signup">sign up</StyledNavLink>
        {/* <StyledNavLink to="/login">log in</StyledNavLink> */}
        {lightTheme ? (
          <button onClick={toggleTheme}>
            <BsSun />
          </button>
        ) : (
          <button onClick={toggleTheme}>
            <BsMoonStars />
          </button>
        )}
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

export default FanNavBar;
