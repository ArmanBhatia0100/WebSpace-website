import "../styles/Header.scss";

import hamIcon from "../../public/assets/shared/icon-hamburger.svg";
import Logo from "../../public/assets/shared/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <div className="hamburger-menu">
          <img src={hamIcon} alt="" />
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
