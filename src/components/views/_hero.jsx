import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: "62.0px",
    position: "relative",
  },
  hero: {
    width: "100%",
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    height: "550px",

    "& img": {
      width: "100%",
      height: "550px",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  info: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    zIndex: "2",

    "& h1": {
      fontWeight: "bold",
    },
  },
}));

export { useStyles };
