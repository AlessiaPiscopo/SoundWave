import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// styles, images & icons
import "./Navbar.css";
import SoundWaveWhite from "./../assets/graphics/logo-img-white.png";
import AccountIcon from "./../assets/icons/account.png";
import BellIcon from "./../assets/icons/bell.png";
// import MagnifyIcon from "./../assets/icons/magnify.png";

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
          {/* <img src={MagnifyIcon} alt="magnify icon" className="icons" /> */}
          {user ? (
            <>
              <img src={BellIcon} alt="bell icon" className="icons" />
              <Link to="/artists/:artistId">
                <img src={AccountIcon} alt="account icon" className="icons" />
              </Link>
              <div>Hey, {user.email}</div>
              <button className="logout-link btn" onClick={logout}>
                log out
              </button>
            </>
          ) : (
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
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
