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

    "& a": {
      textDecoration: "none",
    },

    "&:hover": {
      cursor: "pointer",
    },
    "& $innerImage": {
      height: "200px",
      overflow: "hidden",

      "& img": {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        objectPosition: "center",
      },
    },
    "& $innerVideo": {
      height: "200px",
      overflow: "hidden",
      position: "relative",
      "& video": {
        width: "100%",
        height: "200px",
        objectFit: "cover",
      },
    },
  },
  textDetail: {
    color: theme.palette.common.white,
    padding: theme.spacing(0, 2),
  },
  innerImage: {},
  innerVideo: {},
}));
export { useStyles };
