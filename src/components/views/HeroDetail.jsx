import { Container, Typography } from "@mui/material";
import React from "react";
import SwiperSlideHero from "./SwiperSlideHero";
import ButtonBnb from "../button/ButtonBnb";
import { useStyles } from "./_hero";
import Titles from "../title/Titles";

const HeroDetail = ({ srcHero, textHero, subtextHero, variantHero }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xl">
        <div className={classes.info}>
          <Titles text={textHero} subtext={subtextHero} variant={variantHero} />
          <ButtonBnb
            color="primary"
            variant="contained"
            size="large"
            text="VER MÁS"
          />
        </div>
        <div className={classes.hero}>
          <SwiperSlideHero src={srcHero} spaceBetween="30" slidesPerView="1" />
        </div>
      </Container>
    </div>
  );
};

export default HeroDetail;
