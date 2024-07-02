import "./MobileMenu.css";
import { NavLink } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <ul className="mobile-menu__list">
        <li className="mobile-menu__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__link ${
                isActive ? "mobile-menu__link_active" : "mobile-menu__link"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `header__link ${
                isActive ? "mobile-menu__link_active" : "mobile-menu__link"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `header__link ${
                isActive ? "mobile-menu__link_active" : "mobile-menu__link"
              }`
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `header__link ${
                isActive ? "mobile-menu__link_active" : "mobile-menu__link"
              }`
            }
          >
            Pricing
          </NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `header__link ${
                isActive ? "mobile-menu__link_active" : "mobile-menu__link"
              }`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
