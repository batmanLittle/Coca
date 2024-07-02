import "./HeaderAbout.css";
import Header from "../Header/Header";
import { HeadingMain } from "../HeadingMain/HeadingMain";
import icon from "../../images/icon-about.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import work from "../../images/about-work.svg";
import work1 from "../../images/about-work(1).svg";
import work2 from "../../images/about-work(2).svg";
import button from "../../images/icon-button.svg";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import Button from "../Button/Button";
import React, { useState } from "react";
import orange from "../../images/bacground-orange.png";
import { animated } from "react-spring";
import useCustomAnimation from "../../hooks/useScrollAnimation";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";

function HeaderAbout() {
  const [buttonPosition, setButtonPosition] = useState(false);
  const [mySwiper, setMySwiper] = useState(null);

  const handleNextClick = () => {
    setButtonPosition(true);
  };

  const handlePrevClick = () => {
    setButtonPosition(false);
  };

  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 400,
      id: "header-about",
    });

  return (
    <section className="header-about" id="header-about">
      <img className="header-about-background" alt="background" src={orange} />
      <Header />
      <div className="header-about__container">
        <div className="header-about__intro">
          <animated.div>
            <HeadingMain
              title="Everything you need to get the attention of your audience"
              text="Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow."
              classHeading="header-about__heading"
              classTitle="header-about__title"
              classSubtitle="header-about__subtitle"
              styleTitle={useItemAnimation("translateX(-50%)", 1500)}
              styleSubtitle={useItemAnimation("translateX(-50%)", 1800)}
            />
          </animated.div>
          <animated.img
            className="header-about__img"
            alt="icon"
            src={icon}
            style={useItemAnimation("translateX(50%)", 2100)}
          />
        </div>
        <animated.div style={useItemAnimation("translateY(50%)", 2400)}>
          <Swiper
            className="header-about__sliders"
            allowTouchMove={true}
            spaceBetween={20}
            slidesPerView={1}
            modules={[Virtual, Navigation, Pagination]}
            onInit={setMySwiper}
            breakpoints={{
              900: {
                slidesPerView: 2.5,
                spaceBetween: 32,
                allowTouchMove: false,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
                allowTouchMove: false,
              },
            }}
          >
            <div
              className={
                buttonPosition
                  ? "header-about__button_active"
                  : "header-about__button"
              }
            >
              <img
                className="header-about__button-img"
                alt="button"
                src={button}
              />
              <div
                className="header-about__button-prev"
                onClick={() => {
                  if (mySwiper.activeIndex === 0) {
                    mySwiper.slideToLoop(null);
                  } else {
                    mySwiper.slidePrev();
                  }
                  handlePrevClick();
                }}
              ></div>
              <div
                className="header-about__button-next"
                onClick={() => {
                  if (mySwiper.activeIndex === 2) {
                    mySwiper.slideToLoop(2);
                  } else {
                    mySwiper.slideNext();
                  }
                  handleNextClick();
                }}
              ></div>
            </div>

            <SwiperSlide className="header-about__slider">
              <img className="header-about__slider-img" alt="work" src={work} />
            </SwiperSlide>

            <SwiperSlide className="header-about__slider">
              <img
                className="header-about__slider-img"
                alt="work"
                src={work1}
              />
              <h3 className="header-about__slider-title">What we believe in</h3>
              <p className="header-about__slider-text">
                Over the years at Sans, we’ve put a lot of thought into what it
                is that makes us who we are. The qualities that unite us, that
                make us such an effective team, and...
              </p>
              <Button text="See Details ->" />
            </SwiperSlide>

            <SwiperSlide className="header-about__slider">
              <img
                className="header-about__slider-img"
                alt="work"
                src={work2}
              />
            </SwiperSlide>
          </Swiper>
        </animated.div>
      </div>
    </section>
  );
}

export default HeaderAbout;
