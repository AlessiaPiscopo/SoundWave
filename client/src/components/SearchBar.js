import { useState } from "react";
import "./SearchBar.css";

// SEARCH BY GENRE
const SearchBar = () => {
  const [error, setError] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genre, setGenre] = useState("");

  const handleChange = (ev) => {
    setGenre(ev.target.value);
    console.log(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch(`/api/search/${genre}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setSearchResults(data.body.artists.items);
        console.log(data.body.artists.items);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a genre..."
            value={genre}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="search-results">
        {searchResults.map((result) => {
          return (
            <div className="result-item">
              <div className="artist-name">{result.name}</div>
              <div className="genres-list">{result["genres"]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;

/* <datalist id="genres">
  <option value="pop" />
  <option value="rock" />
  <option value="punk" />
  <option value="electronic" />
  <option value="ambient" />
</datalist>; */
