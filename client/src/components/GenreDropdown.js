import "./GenreDropdown.css";
import allGenres from "../constants/allGenres.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// show dropdown of main genres
// on select, go to /genres/:genre

const GenreDropdown = () => {
  const history = useHistory();
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleChange = (ev) => {
    ev.preventDefault();
    setSelectedGenre(ev.target.value);
    console.log(ev.target.value);
    history.push(`/genres/${ev.target.value}`);
  };

  // for "go" button
  //   const handleClick = () => {
  //     history.push(`/genres/${selectedGenre}`);
  //   };

  return (
    <div className="genre-dropdown">
      <p>choose a genre</p>
      <select onChange={handleChange}>
        {allGenres.map((genre) => {
          return (
            <option name="genre" value={genre} key={genre}>
              {genre}
            </option>
          );
        })}
      </select>
      {/* <button onClick={handleClick}>go</button> */}
    </div>
  );
};

export default GenreDropdown;
