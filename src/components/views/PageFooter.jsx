import { Container, Typography, Box, Button, Hidden } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Titles from "../title/Titles";
import camping from "../../app/images/camping.jpg";

const useStyles = makeStyles((theme) => ({
  textImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.common.white,
    textAlign: "center",
  },
}));

const PageFooter = () => {
  const classes = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <img width="100%" src={camping} alt="camping" />
      <Hidden mdDown>
        <img
          className="fire"
          src="https://c.tenor.com/8McIGu0Tf_QAAAAi/fire-joypixels.gif"
        />
      </Hidden>
      <div className={classes.textImage}>
        <Titles
          text="Acampada en la montaña"
          subtext="Descubre las más de 50 novedades del lanzamiento de inviero"
          variant="h3"
          variantSub="h6"
        />

        <Box mt={4}>
          <Button variant="contained" color="primary" size="large">
            VER MÁS
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default PageFooter;
