import React, { useEffect } from "react";
import "../../App.css";

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
    </Swiper>
  );
};
export default SwiperSlideHero;
