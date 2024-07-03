import "./Footer.css";
import Background from "../Background/Background";
import logo from "../../images/Logo-header.svg";
import logoWhite from "../../images/Logo-white.svg";
import twitterWhite from "../../images/twitter-white.svg";
import facebookWhite from "../../images/facebook-white.svg";
import instagramWhite from "../../images/instagram-white.svg";
import inWhite from "../../images/in-white.svg";
import twitter from "../../images/icon-twitter.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import iconIn from "../../images/icon-in.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 400,
      id: "footer",
    });

  const useLinkAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateY(300%)", opacity: "0" },
      to: { transform: "translateY(0%)", opacity: "1" },
      delay,
      duration: 400,
      id: "footer",
    });

  return (
    <footer
      className={
        location.pathname === "/" || location.pathname === "/blog"
          ? "footer"
          : "footer background-black"
      }
      id="footer"
    >
      <Background />
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__heading">
            <animated.h2
              className="footer__heading-title"
              style={useItemAnimation("translateX(-20%)", 100)}
            >
              Think beyond the wave
            </animated.h2>
            <animated.p
              className={
                location.pathname === "/" || location.pathname === "/blog"
                  ? "footer__heading-subtitle"
                  : "footer__heading-subtitle_grey"
              }
              style={useItemAnimation("translateX(-20%)", 500)}
            >
              Ask about Sans products, pricing, implementation, or anything
              else. Our highly trained reps are standing by, ready to help
            </animated.p>
          </div>
          <Button
            text={"Try for free"}
            styleButton={useItemAnimation("translateX(40%)", 800)}
            classButton={
              location.pathname === "/" || location.pathname === "/blog"
                ? null
                : "footer__button"
            }
          />
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-info">
            <div className="footer__bottom-intro">
              <animated.img
                style={useItemAnimation("translateY(100%)", 1100)}
                className="footer__bottom-logo"
                src={
                  location.pathname === "/" || location.pathname === "/blog"
                    ? logo
                    : logoWhite
                }
                alt="logo"
              />
              <animated.p
                className="footer__bottom-text"
                style={useItemAnimation("translateY(100%)", 1300)}
              >
                We built an elegant solution. Our team created a fully
                integrated sales and marketing solution for SMBs
              </animated.p>
            </div>
            <nav className="footer__nav">
              <div className="footer__nav-lists">
                <animated.p
                  className="footer__nav-title"
                  style={useLinkAnimation(1500)}
                >
                  Company
                </animated.p>
                <ul className="footer__nav-list">
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(1700)}
                  >
                    About
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(1900)}
                  >
                    Pricing
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(2100)}
                  >
                    Jobs
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(2300)}
                  >
                    Blog
                  </animated.li>
                </ul>
              </div>

              <div className="footer__nav-lists">
                <animated.p
                  className="footer__nav-title"
                  style={useLinkAnimation(2500)}
                >
                  Product
                </animated.p>
                <ul className="footer__nav-list">
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(2700)}
                  >
                    Sales Software
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(2900)}
                  >
                    Marketplace
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(3100)}
                  >
                    Terms & Conditions
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(3300)}
                  >
                    Privacy Policy
                  </animated.li>
                </ul>
              </div>

              <div className="footer__nav-lists">
                <animated.p
                  className="footer__nav-title"
                  style={useLinkAnimation(3500)}
                >
                  Discover
                </animated.p>
                <ul className="footer__nav-list">
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(3700)}
                  >
                    CRM Comparision
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(3900)}
                  >
                    Partner Program
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(4100)}
                  >
                    What is CRM
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(4300)}
                  >
                    Resource
                  </animated.li>
                </ul>
              </div>

              <div className="footer__nav-lists">
                <animated.p
                  className="footer__nav-title"
                  style={useLinkAnimation(4500)}
                >
                  Help Center
                </animated.p>
                <ul className="footer__nav-list">
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(4700)}
                  >
                    Community
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(4900)}
                  >
                    Knowledge Base
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(5100)}
                  >
                    Academy
                  </animated.li>
                  <animated.li
                    className="footer__nav-link"
                    style={useLinkAnimation(5300)}
                  >
                    Support
                  </animated.li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="footer__copyright">
            <div className="footer__social-link">
              <img
                className="footer__social-logo"
                alt="facebook"
                src={
                  location.pathname === "/" || location.pathname === "/blog"
                    ? facebook
                    : facebookWhite
                }
              />
              <img
                className="footer__social-logo"
                alt="twitter"
                src={
                  location.pathname === "/" || location.pathname === "/blog"
                    ? twitter
                    : twitterWhite
                }
              />
              <img
                className="footer__social-logo"
                alt="instagram"
                src={
                  location.pathname === "/" || location.pathname === "/blog"
                    ? instagram
                    : instagramWhite
                }
              />
              <img
                className="footer__social-logo"
                alt="iconIn"
                src={
                  location.pathname === "/" || location.pathname === "/blog"
                    ? iconIn
                    : inWhite
                }
              />
            </div>
            <nav className="footer__mobile-link">
              <p className="footer__bottom-text">Privacy Policy</p>
              <p className="footer__bottom-text">Terms & Conditions</p>
              <p className="footer__bottom-text">Support</p>
            </nav>
            <p className="footer__copyright-text">
              © Copyright 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;