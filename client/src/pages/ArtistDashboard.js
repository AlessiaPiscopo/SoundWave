import Container from "../components/StyledElements/Container";

const ArtistDashboard = () => {
  return (
    <Container>
      <header>
        <h2>Welcome Artist! This is your dashboard.</h2>
      </header>

      <div className="column-1">
        <div className="first-steps">
          <p>First Steps</p>
          <button>Add an album</button>
          <button>or add a track</button>
        </div>
        <div className="activity"></div>
      </div>

      <div className="column-2">
        <div className="followers"></div>
        <div className="plays"></div>
        <div className="sales"></div>
      </div>
    </Container>
  );
};

export default ArtistDashboard;

{
  /* <div className="band">
  Get monthly updates on your sales and followers, plus tips for
  making the most of Bandcamp. Click here to opt in.
</div> */
}
