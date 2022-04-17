import { useState } from "react";
import { NavLink } from "react-router-dom";

const ExploreByGenre = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleClick = (ev) => {
    setSelectedGenre(ev.target.value);
    console.log(ev.target.value);
  };

  return (
    <div className="explore-by-genre">
      <p>Explore by Genre</p>
      <ul>
        <li>
          <NavLink to="/genre/" onClick={handleClick}>pop</NavLink>
        </li>
        <li>
          <span>punk</span>
        </li>
        <li>
          <span>hip hop</span>
        </li>
      </ul>
    </div>
  );
};

export default ExploreByGenre;
