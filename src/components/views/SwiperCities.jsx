import React from "react";
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
import { Typography } from "@mui/material";
import cities from "../../app/api/cities";
import { useStyles } from "./_slideCities";
import { Box } from "@mui/system";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

const SwiperCities = () => {
  const classes = useStyles();
  return (
    <Swiper slidesPerView={4.5} spaceBetween={24} className="mySwiper">
      {cities &&
        cities.map((c) => (
          <SwiperSlide>
            <div className={classes.detailSlide}>
              <img src={c.image} alt={c.name} />
              <Box className={classes.textDetail} mt={2}>
                <Typography variant="h6">{c.name}</Typography>
              </Box>
              <Box className={classes.textDetail} mt={2}>
                <Typography variant="body1">{c.excerpt}</Typography>
              </Box>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
export default SwiperCities;
