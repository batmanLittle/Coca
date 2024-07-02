import "./ContactForm.css";
import team from "../../images/team-contact.svg";
import Button from "../Button/Button";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function ContactForm() {
  const formAnimation = useCustomAnimation({
    from: { transform: "translateX(-20%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 600,
    id: "contact-form",
  });

  return (
    <section className="contact-form" id="contact-form">
      <img src={team} alt="team" className="contact-form__img" />
      <div className="contact-form__container">
        <animated.form className="contact-form__form" style={formAnimation}>
          <h3 className="contact-form__title">Let’s level up your brand</h3>
          <p className="contact-form__subtitle">
            You can reach us anytime
            <span className="contact-form__span">
              &nbsp;hellosansbrothers@gmail.com
            </span>
          </p>
          <div className="contact-form__name">
            <div>
              <label className="contact-form__label"></label>
              First name
              <input
                className="contact-form__input"
                type="text"
                name="name"
                id="name"
                required
                minLength={2}
                maxLength={30}
                placeholder="First name"
              />
            </div>
            <div>
              <label className="contact-form__label"> </label>
              Last name
              <input
                className="contact-form__input"
                type="text"
                name="name"
                id="name"
                required
                minLength={2}
                maxLength={30}
                placeholder="Last name"
              />
            </div>
          </div>
          <label className="contact-form__label"></label>
          Email
          <input
            className="contact-form__input"
            type="Email"
            name="Email"
            id="Email"
            required
            minLength={2}
            maxLength={30}
            placeholder="Email"
          />
          <label className="contact-form__label"></label>
          Phone number
          <input
            className="contact-form__input"
            type="tel"
            id="phone"
            name="phone"
            required
            minLength={2}
            maxLength={30}
            placeholder="+1 (555) 000-0000"
          />
          <div className="contact-form__block-message">
            <label className="contact-form__label"></label>
            Message
            <input
              className="contact-form__input-message"
              type="tel"
              id="phone"
              name="phone"
              required
              minLength={2}
              maxLength={500}
              placeholder="Leave us a message..."
            />
          </div>
          <Button text={"Get Started"} />
        </animated.form>
      </div>
    </section>
  );
}

export default ContactForm;
