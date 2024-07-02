import "./Articles.css";
import { Heading } from "../Heading/Heading";
import Button from "../Button/Button";
import buttonWhite from "../../images/articles-button-white.svg";
import buttonBlack from "../../images/articles-button-black.svg";
import work from "../../images/articles-work.svg";
import work1 from "../../images/articles-work(1).svg";
import work2 from "../../images/articles-work(2).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function Articles() {
  const [mySwiper, setMySwiper] = useState(null);

  const titleAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1500,
    duration: 500,
    id: "articles",
  });

  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1800,
    duration: 500,
    id: "articles",
  });

  const buttonAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2100,
    duration: 500,
    id: "articles",
  });

  const swiperAnimation = useCustomAnimation({
    from: { transform: "translateY(-20%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2500,
    duration: 500,
    id: "articles",
  });

  return (
    <section className="articles" id="articles">
      <div className="articles__container">
        <div className="articles__block-top">
          <Heading
            title="Articles"
            text="Complex tech decoded by engineers, business trends analyzed by experts."
            classHeading="articles__heading"
            classTitle="articles__heading-title"
            classSubtitle="articles__heading-subtitle"
            styleTitle={titleAnimation}
            styleSubtitle={subtitleAnimation}
          />
          <animated.div className="articles__buttons" style={buttonAnimation}>
            <button
              className="articles__button"
              onClick={() => {
                if (mySwiper.activeIndex === 0) {
                  mySwiper.slideToLoop(null);
                } else {
                  mySwiper.slidePrev();
                }
              }}
            >
              <img
                className="articles__button-img"
                alt="button"
                src={buttonWhite}
              />
            </button>
            <button
              className="articles__button"
              onClick={() => {
                if (mySwiper.activeIndex === 3) {
                  mySwiper.slideToLoop(3);
                } else {
                  mySwiper.slideNext();
                }
              }}
            >
              <img
                alt="button"
                className="articles__button-img"
                src={buttonBlack}
              />
            </button>
          </animated.div>
        </div>
        <animated.div style={swiperAnimation}>
          <Swiper
            spaceBetween={20}
            className="articles__sliders"
            slidesPerView={1.5}
            onInit={setMySwiper}
            modules={[Virtual, Navigation, Pagination]}
            breakpoints={{
              900: {
                slidesPerView: 3,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
          >
            <SwiperSlide className="articles__slider">
              <img className="articles__slider-img" src={work} alt="work" />
              <p className="articles__slider-title">
                List of UX Designer Portfolio / Case Studies where you can make
                money
              </p>
              <p className="articles__slider-subtitle">
                Here are some portfolios / Case Studies from UX Designers that
                you can use as a reference for creating a portfolio. Two
                interesting things from their portfolio are:
              </p>
              <Button text="Read More" classButton="articles__slider-button" />
            </SwiperSlide>
            <SwiperSlide className="articles__slider">
              <img className="articles__slider-img" src={work1} alt="work" />
              <p className="articles__slider-title">
                Skyrocketing in The Designing Career, Why Not?
              </p>
              <p className="articles__slider-subtitle">
                Ever thought of jumping into the world of design as a career? If
                not, you may want to look at what the word ‘design’ actually
                means. Design is a method of designing aesthetic actions that
                are carried out.
              </p>
              <Button text="Read More" classButton="articles__slider-button" />
            </SwiperSlide>
            <SwiperSlide className="articles__slider">
              <img className="articles__slider-img" src={work2} alt="work" />
              <p className="articles__slider-title">
                Elements that may be missed when designing the UI
              </p>
              <p className="articles__slider-subtitle">
                This is an article that talks about the little elements that are
                often overlooked when designing UI.
              </p>
              <Button text="Read More" classButton="articles__slider-button" />
            </SwiperSlide>
            <SwiperSlide className="articles__slider">
              <img className="articles__slider-img" src={work} alt="work" />
              <p className="articles__slider-title">
                List of UX Designer Portfolio / Case Studies where you can make
                money
              </p>
              <p className="articles__slider-subtitle">
                Here are some portfolios / Case Studies from UX Designers that
                you can use as a reference for creating a portfolio. Two
                interesting things from their portfolio are:
              </p>
              <Button text="Read More" classButton="articles__slider-button" />
            </SwiperSlide>
          </Swiper>
        </animated.div>
      </div>
    </section>
  );
}

export default Articles;
