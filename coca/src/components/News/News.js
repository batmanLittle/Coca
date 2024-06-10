import "./News.css";
import work from "../../images/news-work.png";
import work1 from "../../images/news-work(1).png";
import button from "../../images/icon-button.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";

function News() {
  const [mySwiper, setMySwiper] = useState(null);

  return (
    <section className="news">
      <div className="news__container">
        <div className="news__heading">
          <h2 className="news__heading-title">Trending news from Coca</h2>
          <p className="news__heading-subtitle">
            we have some new Service to pamper you
          </p>
        </div>

        <Swiper
          spaceBetween={16}
          className="news__sliders"
          slidesPerView={1.2}
          onInit={setMySwiper}
          modules={[Virtual, Navigation, Pagination]}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
        >
          <div className="news__button">
            <img className="news__button-img" alt="button" src={button} />
            <div
              className="news__button-prev"
              onClick={() => {
                if (mySwiper.activeIndex === 0) {
                  mySwiper.slideToLoop(null);
                } else {
                  mySwiper.slidePrev();
                }
              }}
            ></div>
            <div
              className="news__button-next"
              onClick={() => {
                if (mySwiper.activeIndex === 2) {
                  mySwiper.slideToLoop(2);
                } else {
                  mySwiper.slideNext();
                }
              }}
            ></div>
          </div>

          <SwiperSlide className="news__slider">
            <img className="news__slider-img" alt="work" src={work} />
            <div className="news__slider-text">
              <p className="news__slider-text">
                Published in Insight Jan 30, 2021
              </p>
              <p className="news__slider-text">by : Albert Sans</p>
            </div>
            <h3 className="news__slider-title">
              What makes an authentic employee profile, and why does it matter ?
            </h3>
          </SwiperSlide>

          <SwiperSlide className="news__slider">
            <img className="news__slider-img" alt="work" src={work1} />
            <div className="news__slider-text">
              <p className="news__slider-text">
                Published in Insight Jan 30, 2021
              </p>
              <p className="news__slider-text">by : Albert Sans</p>
            </div>
            <h3 className="news__slider-title">
              How to build a Kaylen relationship with a good company
            </h3>
          </SwiperSlide>

          <SwiperSlide className="news__slider">
            <img className="news__slider-img" alt="work" src={work} />
            <div className="news__slider-text">
              <p className="news__slider-text">
                Published in Insight Jan 30, 2021
              </p>
              <p className="news__slider-text">by : Albert Sans</p>
            </div>
            <h3 className="news__slider-title">
              What makes an authentic employee profile, and why does it matter ?
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default News;
