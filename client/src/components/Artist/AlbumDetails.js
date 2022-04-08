import TrackPlayer from "../TrackPlayer";

const AlbumDetails = () => {
  return (
    <>
      <div className="wrapper">
        <div className="left-column">
          <div className="album-name">Soy Pablo</div>
          <div className="artist">by Boy Pablo</div>
          <TrackPlayer />

          <div className="buy-album">
            <div className="album-format">Digital Album</div>
            <div>
              Includes unlimited streaming via the free Bandcamp app, plus
              high-quality download in MP3, FLAC and more.
            </div>

            <button>Buy Digital Album</button>
            <span className="price">$7 USD</span>
          </div>

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
