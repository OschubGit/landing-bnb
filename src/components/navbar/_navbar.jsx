import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBarWrapper: {
    background: theme.palette.background.default,
    padding: theme.spacing(0, 3),
  },
  menu: {
    padding: theme.spacing(0, 2),
  },
}));

export { useStyles };
