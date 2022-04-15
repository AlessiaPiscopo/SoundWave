import { Link } from "react-router-dom";
import "./Navbar.css";
// import SearchBar from "../SearchBar";
// import { BsSun, BsMoonStars } from "react-icons/bs";
import SoundWaveWhite from "./../assets/images/logo-img-white.png";

<div>
  <ul>
    <li className="logo">
      <img src={SoundWaveWhite} />
      <span>SoundWave</span>
    </li>

    <li>
      <Link to="/login">login</Link>
    </li>
    <li>
      <Link to="/signup">sign up</Link>
    </li>
    <li className="btn">logout</li>
  </ul>
</div>;

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/welcome">
            <div className="logo">
              <img src={SoundWaveWhite} height="50px" alt="SoundWave logo" />
              <span>SoundWave</span>
            </div>
          </Link>
        </li>

        <div className="content-right">
          <li>
            <Link to="/signup">sign up</Link>
          </li>
          <li>
            <Link to="/login">log in</Link>
          </li>
          <button>log out</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
