import { useState } from "react";

const FaveTrackSelect = () => {
  const tracks = [
    { trackNum: 1, name: "feeling lonely" },
    { trackNum: 2, name: "ur phone" },
    { trackNum: 3, name: "everytime" },
  ];

  const [faveTrack, setFaveTrack] = useState(null);

  const handleSelect = () => {
    setFaveTrack()
  };

  return (
    <>
      Select your favorite track...
      <select onChange={handleSelect} value={(ev) => ev.target.value}>
        {tracks.map((track, trackNum) => {
          return (
            <option key={trackNum} value={track.name}>
              {track.name}
            </option>
          );
        })}
      </select>
      <p></p>
    </>
  );
};

export default FaveTrackSelect;
