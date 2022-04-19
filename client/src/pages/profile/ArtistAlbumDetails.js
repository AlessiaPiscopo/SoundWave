import AudioPlayer from "../AudioPlayer";

const AlbumDetails = () => {
  return (
    <>
      <div className="wrapper">
        <div className="left-column">
          <div className="album-name">albumName</div>
          <div className="artist">by artistName</div>
          <AudioPlayer />

          <section className="track-list"></section>

          <div className="release-date"></div>
        </div>

        <div className="center-column">
          <div className="album-cover"></div>
          <button className="share">Share</button>
          <button className="wishlist"></button>
          {/* supported by */}
        </div>
      </div>
    </>
  );
};

export default AlbumDetails;
