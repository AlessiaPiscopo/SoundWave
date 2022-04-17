import { useState } from "react";

const ExploreByGenre = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  // const [genreClicked, setGenreClicked] = useState(false);

  const handleClick = (ev) => {
    setSelectedGenre(ev.target.value);
    console.log(ev.target.value);
  };

  return (
    <div className="explore-by-genre">
      <p>Explore by Genre</p>
      <ul>
        <li>
          <span onClick={handleClick}>pop</span>
        </li>
        <li>
          <span>rnb</span>
        </li>
      </ul>
    </div>
  );
};

export default ExploreByGenre;
