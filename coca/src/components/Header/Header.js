import "./Header.css";
import logo from "../../images/Logo-header.svg";
import iconMobile from "../../images/Icon-mobile.png";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { animated } from "react-spring";

function Header({ menuAnimation, logoAnimation }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <header className="header">
      <div className="header-container">
        <animated.div style={logoAnimation}>
          <img className="header__logo" src={logo} alt="logo" />
        </animated.div>

        <animated.nav className="header__menu" style={menuAnimation}>
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
                Pricing
              </Link>
            </li>
          </ul>
          <Link to="#" className="header__link">
            Contact Us
          </Link>
        </animated.nav>
        {isMenuOpened ? <MobileMenu /> : ""}

        <img
          className="header__mobile-menu"
          src={iconMobile}
          alt="icon-mobile"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
}

export default Header;
