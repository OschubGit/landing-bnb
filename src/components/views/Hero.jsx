import { Container, Typography } from "@mui/material";
import React from "react";
import SwiperSlideHero from "./SwiperSlideHero";
import ButtonBnb from "../button/ButtonBnb";
import { useStyles } from "./_hero";
import { Box } from "@mui/system";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xl">
        <div className={classes.info}>
          <Typography variant="h2" component="h1">
            Planea tu viaje nocturno
          </Typography>
          <Typography variant="h5" component="h2">
            Descubre las más de 50 novedades del lanzamiento de invierno.
          </Typography>
          <ButtonBnb
            color="primary"
            variant="contained"
            size="large"
            text="VER MÁS"
          />
        </div>
        <div className={classes.hero}>
          <SwiperSlideHero
            src="https://images.unsplash.com/photo-1636333329210-0006f2cb24cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            spaceBetween="30"
            slidesPerView="1"
          />
        </div>
        <Box mt={3}>
          <Typography variant="subtitle1" align="center" color="primary">
            Navega y descubre todo lo que tenemos preparado
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
