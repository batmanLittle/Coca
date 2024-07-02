import "./Header.css";
import logo from "../../images/Logo-header.svg";
import iconMobile from "../../images/Icon-mobile.png";
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { animated } from "react-spring";
import useCustomAnimation from "../../hooks/useScrollAnimation";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const useItemAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateX(-50%)", opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 400,
      id: "header",
    });

  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <header className="header" id="header">
      <div className="header-container">
        <animated.div style={useItemAnimation(100)}>
          <img className="header__logo" src={logo} alt="logo" />
        </animated.div>

        <animated.nav className="header__menu" style={useItemAnimation(800)}>
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `header__link ${
                    isActive ? "header__link_active" : "header__link"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `header__link ${
                    isActive ? "header__link_active" : "header__link"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `header__link ${
                    isActive ? "header__link_active" : "header__link"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `header__link ${
                    isActive ? "header__link_active" : "header__link"
                  }`
                }
              >
                Pricing
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `header__link ${
                isActive ? "header__link_active" : "header__link"
              }`
            }
          >
            Contact Us
          </NavLink>
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
