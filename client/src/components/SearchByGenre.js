import { useState } from "react";
import "./SearchByGenre.css";

// SEARCH BY GENRE
const SearchByGenre = () => {
  const [error, setError] = useState(false);
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
    // SEARCH BY GENRE
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
            <div key={result} className="result-item">
              <div className="artist-name">{result.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchByGenre;
