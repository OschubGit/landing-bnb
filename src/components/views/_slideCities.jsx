import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  detailSlide: {
    display: "flex",
    flexDirection: "column",
    height: "350px",
    maxHeight: "350px",
    textAlign: "left",
    overflow: "hidden",
    borderRadius: "16px",
    background: "rgb(189 51 76)",

    paddingBottom: theme.spacing(4),
    "&:hover": {
      cursor: "pointer",
    },
  },
  textDetail: {
    color: theme.palette.common.white,
    padding: theme.spacing(0, 2),
  },
}));
export { useStyles };
