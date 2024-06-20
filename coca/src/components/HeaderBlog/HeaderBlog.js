import "./HeaderBlog.css";
import Header from "../Header/Header";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { HeadingMain } from "../HeadingMain/HeadingMain";
import Background from "../Background/Background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import React, { useState } from "react";
import workBreak from "../../images/blog-work-break.svg";
import team from "../../images/blog-team.svg";
import work from "../../images/blog-work.svg";
import button from "../../images/icon-button.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";

function HeaderBlog() {
  const [mySwiper, setMySwiper] = useState(null);
  const [buttonPosition, setButtonPosition] = useState(false);
  // const currentIndex = mySwiper.activeIndex;

  const handleNextClick = () => {
    setButtonPosition(true);
  };

  const handlePrevClick = () => {
    setButtonPosition(false);
  };

  return (
    <section className="header-blog" id="header-blog">
      <Header />
      <Background />
      <div className="header-blog__container">
        <HeadingMain
          title="Activity & Updates"
          text="Our biggest challenge is making sure we're always designing and building products that will help you run your business better."
          classHeading="header-blog__heading"
          classTitle="header-blog__title"
          classSubtitle="header-blog__subtitle"
          //   styleTitle={titleAnimation}
          //   styleSubtitle={subtitleAnimation}
        />
        <Swiper
          spaceBetween={16}
          className="header-blog__sliders"
          slidesPerView={1.5}
          onInit={setMySwiper}
          modules={[Virtual, Navigation, Pagination]}
          allowTouchMove={false}
          breakpoints={{
            1050: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
            751: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            651: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <div
            className={
              buttonPosition
                ? "header-blog__button_active"
                : "header-blog__button"
            }
          >
            <img
              className="header-blog__button-img"
              alt="button"
              src={button}
            />
            <div
              className="header-blog__button-prev"
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
              className="header-blog__button-next"
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

          <SwiperSlide className="header-blog__slider">
            <img
              className="header-blog__slider-img"
              alt="work"
              src={workBreak}
            />
            <div className="header-blog__slider-text">
              <p className="header-blog__slider-data">
                Published in Insight Jan 30, 2021
              </p>
              <p className="header-blog__slider-title">
                Practice making User Flow
              </p>
              <p className="header-blog__slider-subtitle">
                In this article, we'll cover how to create user flows
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="header-blog__slider">
            <img className="header-blog__slider-img" alt="work" src={work} />
            <div className="header-blog__slider-text">
              <div className="header-blog__slider-text_header">
                <p className="header-blog__slider-data">
                  Published in Insight Jan 30, 2021
                </p>
                <p className="header-blog__slider-data">by : Albert Sans</p>
              </div>
              <p className="header-blog__slider-title">
                Overview of the Design Principles
              </p>
              <p className="header-blog__slider-subtitle">
                What are Design Principles?… To understand design principles, we
                first discuss the principles.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="header-blog__slider">
            <img className="header-blog__slider-img" alt="work" src={team} />
            <div className="header-blog__slider-text">
              <p className="header-blog__slider-data">
                Published in Insight Jan 30, 2021
              </p>
              <p className="header-blog__slider-title">
                Using Grid in website design
              </p>
              <p className="header-blog__slider-subtitle">
                Andi: "What's the grid like?" Toni: “Like below…”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeaderBlog;
