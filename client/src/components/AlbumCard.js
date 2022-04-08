const AlbumCard = () => {
  return (
    <>
      <header>album card</header>
      <div className="wrapper">
        <div className="album-cover"></div>
        <div className="album-name"></div>
        <div className="artist"></div>

        {/* TrackSelect component? */}
        <div className="favourite-track">
          <div className="select-track"></div>
        </div>

        {/* CommentBox component */}
        <section className="comment-box">
          <label>Why do you love this album?</label>
          <div className="textarea"></div>

          <button className="save">Save</button>
          <button className="cancel">Cancel</button>
        </section>
      </div>
    </>
  );
};

export default AlbumCard;