import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value);

    // fetch genre endpoint

    console.log(ev.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <input type="search" placeholder="Search..." onChange={handleChange} />
      </div>
    </>
  );
};

export default SearchBar;

{
  /* <datalist id="genres">
  <option value="pop" />
  <option value="rock" />
  <option value="punk" />
  <option value="electronic" />
  <option value="ambient" />
</datalist>; */
}
