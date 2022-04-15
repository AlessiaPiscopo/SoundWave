import Collection from "../components/Profile/Collection";
import Wishlist from "../components/Profile/Wishlist";
import Following from "../components/Profile/Following";

const FanProfile = () => {
  return (
    <>
      <header>My Profile</header>

      <div className="banner-img"></div>

      <section className="bio">
        <img src="" alt="" className="profile-img" />
        <div className="name"></div>
        <div className="location"></div>
        <div className="about-you"></div>
      </section>

      {/* MenuBar component */}
      <div className="menu-bar">
        <Collection />
        <Wishlist />
        <Following />
      </div>
    </>
  );
};

export default FanProfile;
