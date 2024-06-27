import "./Questions.css";
import { Heading } from "../Heading/Heading";
import minus from "../../images/Icon-minus.svg";
import plus from "../../images/Icon-plus.svg";

function Questions() {
  return (
    <section className="questions">
      <div className="questions__container">
        <Heading
          title="Frequently asked questions"
          text="Everything you need to know about the product and billing."
          classHeading="news__heading"
          classTitle="news__heading-title"
          classSubtitle="news__heading-subtitle"
          //   styleTitle={titleAnimation}
          //   styleSubtitle={subtitleAnimation}
        />
        <ul className="questions__list">
          <li className="questions__item">
            <div className="questions__item-heading">
              <p className="questions__item-title">
                Is there a free trial available?
              </p>
              <p className="questions__item-subtitle">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
            <img alt="minus" src={minus} className="questions__item-icon" />
          </li>

          <li className="questions__item">
            <p className="questions__item-title">
              How Can I Add More Emails To My Account?
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </li>

          <li className="questions__item">
            <p className="questions__item-title">
              Can I Change Plans Or Cancel My Subscription At Any Time
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </li>

          <li className="questions__item">
            <p className="questions__item-title">
              How Secure Is My Date With Sans CRM
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </li>

          <li className="questions__item">
            <p className="questions__item-title">
              What Is The Uptime Guarantee
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Questions;
