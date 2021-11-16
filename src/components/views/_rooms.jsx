import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2),
  },
  boxImage: {
    borderRadius: "16px",
    overflow: "hidden",
    width: "100%",
    minHeight: "500px",
    maxHeight: "500px",
    position: "relative",

    "& img": {
      width: "100%",
      height: "500px",
      objectFit: "cover",
      transform: "scale(1)",
      transition: "0.3s ease-in",

      "&:hover": {
        transform: "scale(1.03)",
        transition: "0.3s ease-in",
        cursor: "pointer",
      },
    },
  },
  filter: {
    background: "linear-gradient(0deg, #000000d9, transparent)",
    position: "absolute",
    width: "100%",
    height: "52%",
    bottom: "0",
  },
  textImage: {
    position: "absolute",
    bottom: "3rem",
    left: "3rem",
    color: theme.palette.common.white,
  },
}));
export { useStyles };
