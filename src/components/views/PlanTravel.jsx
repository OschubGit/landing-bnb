import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import { useStyles } from "./_planTravel";
import Titles from "../title/Titles";

const PlanTravel = () => {
  const classes = useStyles();
  return (
    <Box my={5}>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              className={classes.travelImage}
              src="/images/travel_plan.png"
              alt="planing_travel"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.travelText}>
              <Titles
                text="¿Planes un viaje?"
                subtext="Si no sabes deonde ir, te ayudamos a planer tu viaje"
                variant="h4"
                variantSub="h6"
              />
              <Box mt={4}>
                <Button variant="contained" color="primary" size="large">
                  VER MÁS
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlanTravel;
