import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://geeko.lesoir.be/wp-content/uploads/2019/02/netflix-du-changement-pour-ses-contenus-originaux-1-1024x528.jpg"
            alt="logo"
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Items</span>
        </div>
        <div className="right">
          <span>Serach</span>
          <span>Notification</span>
        </div>
      </div>
    </div>
  );
};
