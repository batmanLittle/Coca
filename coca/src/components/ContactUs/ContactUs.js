import "./ContactUs.css";
import Header from "../Header/Header";
import worldMap from "../../images/World-map.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function ContactUs() {
  const useItemAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateX(-100%)", opacity: "0" },
      to: { transform: "translateY(0%)", opacity: "1" },
      delay,
      duration: 500,
      id: "contact-us",
    });

  const useListAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateX(100%)", opacity: "0" },
      to: { transform: "translateY(0%)", opacity: "1" },
      delay,
      duration: 500,
      id: "contact-us",
    });

  return (
    <section className="contact-us" id="contact-us">
      <Header />
      <div className="contact-us__container">
        <animated.h2
          className="contact-us__title"
          style={useItemAnimation(1200)}
        >
          Contact our team to find out more
        </animated.h2>
        <div className="contact-us__info">
          <animated.img
            style={useItemAnimation(1500)}
            className="contact-us__img"
            alt="World-map"
            src={worldMap}
          />
          <ul className="contact-us__list">
            <animated.li
              className="contact-us__item"
              style={useListAnimation(1900)}
            >
              <p className="contact-us__item-title">Support</p>
              <p className="contact-us__item-subitle">
                Our friendly team is here to help.
              </p>
              <p className="contact-us__item-contact">support@sans.com</p>
            </animated.li>
            <animated.li
              className="contact-us__item"
              style={useListAnimation(2200)}
            >
              <p className="contact-us__item-title">Sales</p>
              <p className="contact-us__item-subitle">
                Questions or queries? Get in touch!
              </p>
              <p className="contact-us__item-contact">sales@sans.com</p>
            </animated.li>
            <animated.li
              className="contact-us__item"
              style={useListAnimation(2500)}
            >
              <p className="contact-us__item-title">Phone</p>
              <p className="contact-us__item-subitle">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="contact-us__item-contact">+1 (435) 345-7655</p>
            </animated.li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
