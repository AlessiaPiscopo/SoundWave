import { NavLink } from "react-router-dom";

// styles
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">{/* avatar and username here later */}</div>
        <p>Hey user</p>
      </div>
      <nav className="links">
        <ul>
          {/* artist && */}
          <li>
            <NavLink to="/artist-dashboard"> </NavLink>
          </li>
          {/* fan && */}
          <li>
            <NavLink to="/fan-dashboard"> </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
