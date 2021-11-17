import React from "react";
import SwiperCities from "./SwiperCities";
import { Box } from "@mui/material";
import { useStyles } from "./_citieSlide";

const CitieSlides = () => {
  return (
    <div>
      <Box ml={3}>
        <SwiperCities slidesPerView={4.5} category="Ciudades" />
      </Box>
    </div>
  );
};

export default CitieSlides;
