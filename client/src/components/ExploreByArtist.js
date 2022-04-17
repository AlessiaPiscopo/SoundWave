import { useState } from "react";
import { useParams } from "react-router-dom";

const ExploreByArtist = () => {
  const [selectedArtist, setSelectedArtist] = useState("");
  // const [artistClicked, setArtistClicked] = useState(false);

  const handleClick = (ev) => {
    setSelectedArtist(ev.target.value);
    console.log(ev.target.value);
  };

  return (
    <div className="explore-by-genre">
      <p>Explore by Genre</p>
      <ul>
        <li>
          <span onClick={handleClick}>Alvvays</span>
        </li>
        <li>
          <span>TOPS</span>
        </li>
      </ul>
    </div>
  );
};

export default ExploreByArtist;
