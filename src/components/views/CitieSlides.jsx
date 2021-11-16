import React from "react";
import SwiperCities from "./SwiperCities";
import { Container, Typography, Box } from "@mui/material";
import { useStyles } from "./_citieSlide";
import Titles from "../title/Titles";

const CitieSlides = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Box my={4}>
          <Titles
            text="Encuentra tu ciudad favorita"
            subtext="Elige entre miles de ciudades donde elegir tu destino este invierno"
            variant="h4"
            variantSub="h6"
          />
        </Box>
      </Container>
      <Box ml={3}>
        <SwiperCities />
      </Box>
    </div>
  );
};

export default CitieSlides;
