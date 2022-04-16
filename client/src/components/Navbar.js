import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import SearchBar from "../components/SearchBar";

// styles, images & icons
import "./Navbar.css";
import SoundWaveWhite from "./../assets/images/logo-img-white.png";
import AccountIcon from "./../assets/icons/account.png";
import BellIcon from "./../assets/icons/bell.png";
import MagnifyIcon from "./../assets/icons/magnify.png";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">
            <div className="logo">
              <img
                className="logo-img"
                src={SoundWaveWhite}
                alt="SoundWave logo"
              />
              <span>SoundWave</span>
            </div>
          </Link>
        </li>

        <div className="links-right">
          {/* if user, hide link, display bell, avatar icons, and logout btn */}
          <SearchBar />
          <img src={MagnifyIcon} alt="magnify icon" className="icons" />
          <img src={BellIcon} alt="bell icon" className="icons" />
          <Link to="/dashboard">
            <img src={AccountIcon} alt="account icon" className="icons" />
          </Link>
          {!user && (
            <>
              <li className="artist-signup-link">
                <Link to="/signup">sign up</Link>
              </li>
              <li className="artist-login-btn">
                <button className="btn">
                  <Link to="/login">log in</Link>
                </button>
              </li>
            </>
          )}

          {user && (
            // <button className="btn" onClick={logout}>
            //   log out
            // </button>
            <span className="logout-link" onClick={logout}>
              log out
            </span>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
