import React, { useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useStyles } from "./_rooms";
import Titles from "../title/Titles";

const Room = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Box my={4}>
          <Titles
            text="¿Qué habitación prefieres?"
            subtext="Elige entre miles de ciudades donde elegir tu destino este invierno"
            variant="h4"
            variantSub="h6"
          />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className={classes.boxImage}>
              <img
                className="boxImageInner"
                src="/images/room_1.jpg"
                alt="room_izq"
              />
              <div className={classes.filter} />
              <div className={classes.textImage}>
                <Titles
                  text="Habitaciones elegantes"
                  subtext="Una selección de habitaciones estilo minimal"
                  variant="h6"
                  variantSub="body1"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.boxImage}>
              <img
                className="boxImageInner"
                src="/images/room_2.jpg"
                alt="room_der"
              />
              <div className={classes.filter} />
              <div className={classes.textImage}>
                <Titles
                  text="Habitaciones vintage"
                  subtext="Siéntete como en casa con un ambiente cálido y acogedor"
                  variant="h6"
                  variantSub="body1"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Room;
