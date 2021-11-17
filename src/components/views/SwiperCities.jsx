import React from "react";
import Titles from "../title/Titles";
import { Link, useParams, useHistory } from "react-router-dom";
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
import { Typography, Container } from "@mui/material";
import products from "../../app/api/products";
import { useStyles } from "./_slideCities";
import { Box } from "@mui/system";

// install Swiper components
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

const SwiperCities = ({ category, slidesPerView }) => {
  const classes = useStyles();
  const history = useHistory();

  const result = products.filter((item) => item.category === category);

  return result.map((item) => (
    <>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Box my={4}>
          <Titles text={item.category} variant="h5" />
        </Box>
      </Container>
      <Swiper
        key={item.id}
        slidesPerView={slidesPerView}
        spaceBetween={24}
        className="mySwiper"
      >
        {item.items.map((i) => (
          <SwiperSlide key={i.name}>
            <div className={classes.detailSlide}>
              <Link
                onClick={() =>
                  history.replace(`/travel-city/${item.name}/${i.slug}`)
                }
              >
                {i.video ? (
                  <div className={classes.innerVideo}>
                    <video controls poster={i.image}>
                      <source src={i.video} />
                    </video>
                  </div>
                ) : (
                  <div className={classes.innerImage}>
                    <img src={i.image} alt={i.name} />
                  </div>
                )}
                <Box className={classes.textDetail} mt={2}>
                  <Typography variant="h6">{i.name}</Typography>
                </Box>
                <Box className={classes.textDetail} mt={2}>
                  <Typography variant="body1">{i.excerpt}</Typography>
                </Box>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ));
};
export default SwiperCities;
