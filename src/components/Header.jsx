import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>
      <nav>
        <div className="hamburger-menu">
          <img src="/assets/shared/icon-hamburger.svg" alt="hamburger" />
        </div>
        <div className="menu-item">
          <div>Home</div>
          <div>Destination</div>
          <div>Crew</div>
          <div>Technology</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
