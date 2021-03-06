import "./GenreDropdown.css";
import allGenres from "../constants/allGenres.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const GenreDropdown = () => {
  const history = useHistory();
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleChange = (ev) => {
    ev.preventDefault();
    setSelectedGenre(ev.target.value);
    console.log(ev.target.value);
    history.push(`/genres/${ev.target.value}`);
  };

  return (
    <div className="genre-dropdown">
      <div className="content-container">
        <h1 className="title">Explore Artists By Genre</h1>
        <select className="select" onChange={handleChange}>
          {allGenres.map((genre) => {
            return (
              <option name="genre" value={genre} key={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GenreDropdown;
