import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold !important",
  },
}));

const Titles = (props) => {
  const classes = useStyles();
  const { text, subtext, variant, variantSub, color } = props;
  return (
    <Box my={4}>
      <Typography variant={variant} className={classes.title} color={color}>
        {text}
      </Typography>
      <Typography variant={variantSub}>{subtext}</Typography>
    </Box>
  );
};

export default Titles;
