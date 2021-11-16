import { Container, Typography } from "@mui/material";
import React from "react";
import SwiperSlideHero from "./SwiperSlideHero";
import ButtonBnb from "../button/ButtonBnb";
import { useStyles } from "./_hero";
import { Box } from "@mui/system";
import Titles from "../title/Titles";
import santorini from "../../app/images/santorini.jpg";

const Santorini = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="lg">
        <div className={classes.info}>
          <Titles
            text="Santorini"
            subtext="Un lugar donde desconectar y respirar"
            variant="h3"
            variantSub="h6"
          />
          <Box mt={3}>
            <ButtonBnb
              color="primary"
              variant="contained"
              size="large"
              text="VER MÁS"
            />
          </Box>
        </div>
        <div className={classes.hero}>
          <SwiperSlideHero
            src={santorini}
            spaceBetween="30"
            slidesPerView="1"
          />
        </div>
      </Container>
    </div>
  );
};

export default Santorini;
