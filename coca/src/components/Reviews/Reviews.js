import "./Reviews.css";
import quotes from "../../images/quotes.svg";
import grade from "../../images/grade.svg";
import avatar from "../../images/avatar.svg";
import next from "../../images/reviews-next.svg";
import prev from "../../images/reviews-prev.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";

function Reviews() {
  const [mySwiper, setMySwiper] = useState(null);

  const titleAnimation = useCustomAnimation({
    from: { transform: "translateX(-60%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 100,
    duration: 400,
    id: "reviews",
  });

  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateX(-100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 400,
    id: "reviews",
  });

  const swiperAnimation = useCustomAnimation({
    from: { transform: "translateY(-20%)", opacity: "0" },
    to: { transform: "translateY(0%)", opacity: "1" },
    delay: 900,
    duration: 400,
    id: "reviews",
  });

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <Heading
          title="What our customer are saying"
          text="We are trusted numerous companies from different business to meet
            their needs"
          classHeading="reviews__heading"
          classTitle="reviews__heading-title"
          classSubtitle="reviews__heading-subtitle"
          styleTitle={titleAnimation}
          styleSubtitle={subtitleAnimation}
        />
        <animated.div style={swiperAnimation}>
          <img className="reviews__img" src={quotes} alt="quotes" />
          <Swiper
            className="reviews__sliders"
            slidesPerView={1}
            onInit={setMySwiper}
            modules={[Virtual, Navigation, Pagination]}
          >
            <SwiperSlide className="reviews__slider">
              <img className="reviews__slider-img" src={grade} alt="grade" />
              <p className="reviews__slider-comment">
                “With Agency the results are very satisfying. wrapped with Hight
                quality and innovative design that makes a surge of visitors on
                my website”
              </p>
              <div className="reviews__user">
                <img
                  className="reviews__user-avatar"
                  alt="avatar"
                  src={avatar}
                />
                <div className="reviews__user-info">
                  <h4 className="reviews__user-name">Renee Wells</h4>
                  <p className="reviews__user-prof">
                    Product Designer, Quotient
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="reviews__slider">
              <img className="reviews__slider-img" src={grade} alt="grade" />
              <p className="reviews__slider-comment">
                “With Agency the results are very satisfying. wrapped with Hight
                quality and innovative design that makes a surge of visitors on
                my website”
              </p>
              <div className="reviews__user">
                <img
                  className="reviews__user-avatar"
                  alt="avatar"
                  src={avatar}
                />
                <div className="reviews__user-info">
                  <h4 className="reviews__user-name">Renee Wells</h4>
                  <p className="reviews__user-prof">
                    Product Designer, Quotient
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="reviews__slider">
              <img className="reviews__slider-img" src={grade} alt="grade" />
              <p className="reviews__slider-comment">
                “With Agency the results are very satisfying. wrapped with Hight
                quality and innovative design that makes a surge of visitors on
                my website”
              </p>
              <div className="reviews__user">
                <img
                  className="reviews__user-avatar"
                  alt="avatar"
                  src={avatar}
                />
                <div className="reviews__user-info">
                  <h4 className="reviews__user-name">Renee Wells</h4>
                  <p className="reviews__user-prof">
                    Product Designer, Quotient
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className="reviews__user-buttons">
              <img
                className="reviews__user-prev"
                src={prev}
                alt="prev"
                onClick={() => {
                  console.log("ff");
                  if (mySwiper.activeIndex === 0) {
                    mySwiper.slideToLoop(null);
                  } else {
                    mySwiper.slidePrev();
                  }
                }}
              />
              <img
                className="reviews__user-next"
                src={next}
                alt="next"
                onClick={() => {
                  if (mySwiper.activeIndex === 2) {
                    mySwiper.slideToLoop(2);
                  } else {
                    mySwiper.slideNext();
                  }
                }}
              />
            </div>
          </Swiper>
        </animated.div>
      </div>
    </section>
  );
}

export default Reviews;
