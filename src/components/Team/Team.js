import "./Team.css";
import { Heading } from "../Heading/Heading";
import green from "../../images/bacground-green.png";
import button from "../../images/icon-button.svg";
import specialist from "../../images/team-specialist.svg";
import specialist1 from "../../images/team-specialist(1).svg";
import specialist2 from "../../images/team-specialist(2).svg";
import Twitter from "../../images/Twitter-grey.svg";
import In from "../../images/In-grey.svg";
import Inst from "../../images/Inst-grey.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";
import { animated } from "react-spring";
import useCustomAnimation from "../../hooks/useScrollAnimation";

function Team() {
  const [mySwiper, setMySwiper] = useState(null);

  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 400,
      id: "team",
    });

  return (
    <section className="team" id="team">
      <img className="team-bacground" alt="bacground" src={green} />
      <div className="team__container">
        <Heading
          title="Meet our team of creators, designers, and world-class problem solvers"
          text="To become the company that customers want, it takes a group of passionate people. Get to know the people who lead"
          classTitle="team__heading-title"
          classSubtitle="team__heading-subtitle"
          classHeading="team__heading"
          styleTitle={useItemAnimation("translateX(-50%)", 100)}
          styleSubtitle={useItemAnimation("translateX(-50%)", 400)}
        />
        <animated.div style={useItemAnimation("translateY(50%)", 700)}>
          <Swiper
            onInit={setMySwiper}
            spaceBetween={16}
            className="team__sliders"
            slidesPerView={1.5}
            modules={[Virtual, Navigation, Pagination]}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 26,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            <div className="team__button">
              <img className="team__button-img" alt="button" src={button} />
              <div
                className="team__button-prev"
                onClick={() => {
                  if (mySwiper.activeIndex === 0) {
                    mySwiper.slideToLoop(null);
                  } else {
                    mySwiper.slidePrev();
                  }
                }}
              ></div>
              <div
                className="team__button-next"
                onClick={() => {
                  if (mySwiper.activeIndex === 3) {
                    mySwiper.slideToLoop(3);
                  } else {
                    mySwiper.slideNext();
                  }
                }}
              ></div>
            </div>
            <SwiperSlide className="team__slider">
              <img className="team__slider-img" alt="work" src={specialist} />
              <div className="team__info">
                <div className="team__spec">
                  <p className="team__user-name">Arlyne Stefano</p>
                  <p className="team__user-prof">Founder & CEO</p>
                </div>
                <div className="team__social">
                  <img
                    className="team__social-img"
                    alt="Twitter"
                    src={Twitter}
                  />
                  <img className="team__social-img" alt="In" src={In} />
                  <img className="team__social-img" alt="Inst" src={Inst} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="team__slider">
              <img className="team__slider-img" alt="work" src={specialist1} />
              <div className="team__info">
                <div className="team__spec">
                  <p className="team__user-name">Katy Cristy</p>
                  <p className="team__user-prof">Chief Technology Officer</p>
                </div>
                <div className="team__social">
                  <img
                    className="team__social-img"
                    alt="Twitter"
                    src={Twitter}
                  />
                  <img className="team__social-img" alt="In" src={In} />
                  <img className="team__social-img" alt="Inst" src={Inst} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="team__slider">
              <img className="team__slider-img" alt="work" src={specialist2} />
              <div className="team__info">
                <div className="team__spec">
                  <p className="team__user-name">Roger Dzawin</p>
                  <p className="team__user-prof">Chief Technology Officer</p>
                </div>
                <div className="team__social">
                  <img
                    className="team__social-img"
                    alt="Twitter"
                    src={Twitter}
                  />
                  <img className="team__social-img" alt="In" src={In} />
                  <img className="team__social-img" alt="Inst" src={Inst} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="team__slider">
              <img className="team__slider-img" alt="work" src={specialist} />
              <div className="team__info">
                <div className="team__spec">
                  <p className="team__user-name">Arlyne Stefano</p>
                  <p className="team__user-prof">Founder & CEO</p>
                </div>
                <div className="team__social">
                  <img
                    className="team__social-img"
                    alt="Twitter"
                    src={Twitter}
                  />
                  <img className="team__social-img" alt="In" src={In} />
                  <img className="team__social-img" alt="Inst" src={Inst} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </animated.div>
        <div className="team__bottom">
          <Heading
            title="Join our team, The one with the master touch"
            text="We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values."
            classTitle="team__heading-bottom_title"
            classSubtitle="team__heading-bottom_subtitle"
            classHeading="team__heading-bottom"
            styleTitle={useItemAnimation("translateX(-50%)", 1000)}
            styleSubtitle={useItemAnimation("translateX(50%)", 1300)}
          />
          <animated.p
            className="team__open-position"
            style={useItemAnimation("translateX(50%)", 1300)}
          >
            See Open Position -&gt;
          </animated.p>
        </div>
      </div>
    </section>
  );
}

export default Team;
