import "./Header.css";
import logo from "../../images/Logo-header.svg";
import iconMobile from "../../images/Icon-mobile.png";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  // const [isFirstRender, setIsFirstRender] = useState(true);

  // useEffect(() => {
  //   const isPageReload = sessionStorage.getItem("pageReload");

  //   if (!isPageReload) {
  //     sessionStorage.setItem("pageReload", true);
  //     setIsFirstRender(false);
  //   }
  // }, []);

  const logoAnimation = useSpring({
    from: { transform: "translateY(100%)", opacity: "0" },
    to: { transform: "translateY(0%)", opacity: "1" },
    delay: 100, // Задержка перед началом анимации
    config: {
      duration: 1000, // Длительность анимации в миллисекундах
    },
  });

  const menuAnimation = useSpring({
    from: {
      transform: "translateX(-50%)",
      opacity: "0",
    },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1000, // Задержка перед началом анимации после лого
    config: {
      duration: 600, // Длительность анимации в миллисекундах
    },
  });

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
