import "./MobileMenu.css";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <ul className="mobile-menu__list">
        <li className="mobile-menu__item">
          <Link to="#" className="mobile-menu__link">
            Home
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link to="#" className="mobile-menu__link">
            About
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link to="#" className="mobile-menu__link">
            Blog
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link to="#" className="mobile-menu__link">
            Pricing
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link to="#" className="mobile-menu__link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
