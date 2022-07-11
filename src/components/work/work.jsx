import React from "react";
import "./work.css";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Display1 from "../../assets/portfolio1.png";
import Display2 from "../../assets/portfolio2.png";
import Display3 from "../../assets/portfolio3.png";
import Display4 from "../../assets/portfolio4.png";

const Work = () => {
  return (
    <section>
      <h5>Check out our gallery</h5>
      <h3>Our works</h3>
      <Swiper
        className="container swiper__container"
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={140}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <img src={Display1} alt="" className="Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Display2} alt="" className="Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Display3} alt="" className="Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Display4} alt="" className="Slider" />
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Work;
