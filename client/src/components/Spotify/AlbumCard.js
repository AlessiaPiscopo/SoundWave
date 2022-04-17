import React from "react";

const AlbumCard = ({ album, artists, name }) => {
  return (
    <div className="album-card">
      <div className="album-cover">
        {/* album cover */}
        <img src={album.images[0].url} alt={name}></img>
      </div>
      <div>
        {/* album name */}
        <label htmlFor={name}>{name}</label>
      </div>
      <div>
        {/* artist name */}
        <label htmlFor={artists[0].name}>{artists[0].name}</label>
      </div>
    </div>
  );
};

export default AlbumCard;
