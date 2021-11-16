import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./_navbar";
import Logo from "../Logo";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className={classes.appBarWrapper}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Logo width="130px" />
          </Typography>
          <Typography className={classes.menu} variant="subtitle1">
            Mi Espacio
          </Typography>
          <Typography className={classes.menu} variant="subtitle1">
            Administración
          </Typography>
          <Typography className={classes.menu} variant="subtitle1">
            Panel de Control
          </Typography>
          <Button color="secondary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
