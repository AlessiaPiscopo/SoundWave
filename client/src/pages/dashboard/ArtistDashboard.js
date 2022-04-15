import { useAuthContext } from "../../hooks/useAuthContext";

const ArtistDashboard = () => {
  const { user } = useAuthContext();

  return (
    <div className="artist-dashboard">
      <header>
        <h2>Welcome {user.email}! This is your dashboard.</h2>
      </header>

      <div className="column-1">
        <div className="first-steps">
          {/* <p>First Step: </p> */}
          <button className="btn">Add an album</button>
          <button className="btn">or add a track</button>
        </div>
        <div className="activity">
          Once word gets out that you're here, this is where you'll see
          notifications of sales and followers. To make that happen, go read our
          Artist Guide.
        </div>
      </div>

      <div className="column-2">
        <div className="followers">
          No followers, but just you wait! This is where you'll see your
          followers. We notify them when you release new music or merch, so the
          more followers you have, the more sales you can expect.
        </div>
        <div className="plays">
          The site of your future plays Add your music and we'll start showing
          your plays here.
        </div>
        <div className="sales">
          Cha-ching! Add your music and merch and we'll start showing your sales
          here.
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;
