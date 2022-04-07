import Collection from "../Collection";
import Wishlist from "../Wishlist";
import Following from "../Following";

const ProfilePage = () => {
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

      <div className="tabs">
        <Collection />
        <Wishlist />
        <Following />
      </div>
    </>
  );
};

export default ProfilePage;
