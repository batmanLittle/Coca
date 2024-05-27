import "./Header.css";
import logo from "../../images/Logo-header.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <Link to="#" className="header__link">
                Home
              </Link>
            </li>
            <li className="header__item">
              <Link to="#" className="header__link">
                About
              </Link>
            </li>
            <li className="header__item">
              <Link to="#" className="header__link">
                Blog
              </Link>
            </li>
            <li className="header__item">
              <Link to="#" className="header__link">
                Blog
              </Link>
            </li>
          </ul>
          <Link to="#" className="header__link">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
