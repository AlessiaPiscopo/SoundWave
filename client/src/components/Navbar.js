import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

// styles & images
import "./Navbar.css";
import SoundWaveWhite from "./../assets/images/logo-img-white.png";

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">
            <div className="logo">
              <img src={SoundWaveWhite} height="50px" alt="SoundWave logo" />
              <span>SoundWave</span>
            </div>
          </Link>
        </li>

        <div className="content-right">
          <li>
            <Link to="/artist/signup">sign up</Link>
          </li>
          <li>
            <Link to="/artist/login">log in</Link>
          </li>
          <button className="btn" onClick={logout}>
            log out
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
