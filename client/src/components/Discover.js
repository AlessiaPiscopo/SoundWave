// components
import SearchByGenre from "./SearchByGenre";
import GenreDropdown from "./GenreDropdown";
import ExploreByArtist from "./ExploreByArtist";

// styles
import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover">
      <p className="heading">Discover</p>
      {/* <ExploreByGenre /> */}
      {/* Featured Artists */}
      <ExploreByArtist />
      <GenreDropdown />
      <SearchByGenre />
    </div>
  );
};

export default Discover;
