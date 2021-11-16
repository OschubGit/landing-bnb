import React, { useEffect } from "react";
import "../../app.css";

/// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

const SwiperSlideHero = ({ slidesPerView, spaceBetween, src }) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 9500,
        disableOnInteraction: false,
      }}
      /* navigation={true} */
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="imageSwiperBasicScroll" src={src} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1636266698143-8e05319dc421?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperSlideHero;
