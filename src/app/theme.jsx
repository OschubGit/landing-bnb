import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
      xxl: 1920,
    },
  },
  direction: "ltr",
  palette: {
    type: "dark",
    common: {
      black: "#000",
      white: "#fff",
      facebook: "#3b5998",
    },
    sckDark: {
      main: "#06070F",
    },
    primary: {
      main: "#20c0c5", // corporativo scenikus por defecto
      light: "#20f1c4", // corporativo scenikus
      dark: "#287175", // corporativo scenikus
      contrastText: "#fff",
    },
    secondary: {
      main: "#c10057",
      light: "#fb3b57",
      dark: "#8c0035",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      title: "#00ffff", //cyan
      primaryContrast: "#0000ff", //blue
      light: "#FFF",
      dark: "#000",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      default: "#06070D", // fondo por defecto de la página
      alternative: "#071F2C",
      secondary: "#18181B",
      paper: "#1f1f23",
      administration: "linear-gradient(53deg, #13547a 35%, #91d3cb 100%)",
      primaryOpacity: "#1f202578",
      globalviewBackground: "#1A2129",
      globalviewPaper: "#212B36",
      globalViewTitleBox: "#ffffff2e",
    },
    navbar: {
      background: "#06070D",
      dropdown: "#1f2026",
      hover: "#1f2026",
      icons: "#FFF",
      text: "#FFF",
    },
    drawer: {
      background: "#fff",
      backdrop: "#25374638",
      hover: "#18181b0d",
      icons: "#06070D",
      text: "#06070D",
      role: "#848484",
    },
    tabs: {
      background: "#1F2026",
      hover: "#18181B",
      text: "#FFF",
    },
    tags: {
      vodBg: "#287175",
      vodColor: "#fff",
      liveBg: "#8c0035",
      liveColor: "#fff",
    },
    footer: {
      icons: "#FFF",
      text: "#fff",
      background: "#18181B",
    },
    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: "0.38",
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    alert: {
      colorStandardInfo: "#1976d2",
      bgStandardInfo: "#e8f4fd",
      colorStandardSuccess: "#388e3c",
      bgStandardSuccess: "#EDF7ED",
      colorStandardWarning: "#f57c00",
      bgStandardWarning: "#FFF4E5",
      colorStandardError: "#900000",
      bgStandardError: "#ffafa9",
      //FILLED
      bgFilledInfo: "#2396F3",
      colorFilledInfo: "#ffffff",
      bgFilledSuccess: "#4CAF4F",
      colorFilledSuccess: "#ffffff",
      bgFilledWarning: "#FF9800",
      colorFilledWarning: "#ffffff",
      bgFilledErorr: "#F44335",
      colorFilledErorr: "#ffffff",
      //OUTLINED
      outlinedInfo: "#2396F3",
      colorOutlinedInfo: "#2196f3",
      outlinedSuccess: "#2396F3",
      colorOutlinedSuccess: "#4caf50",
      outlinedWarning: "#FF9800",
      colorOutlinedWarning: "#f57c00",
      outlinedErorr: "#F44335",
      colorOutlinedError: "#f44336",
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      // Used for title
      fontWeight: 100,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
      marginBottom: "16px",
    },
    h5: {
      // Used for subtitles
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
      marginBottom: "16px",
    },
    h6: {
      // Used to enhance content
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
      "&:focus": {
        outline: "none",
      },
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
      color: "#dadada",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  // Border - Aplicado en "paper"
  border: {
    small: "0.3px solid #20bfc50a",
    large: "1px solid #20bfc50a",
  },
  // BoxShadow - Aplicado en "paper"
  boxShadow: {
    small: "0px 3px 11px 3px #06070e30",
    large: "0px 3px 7px 6px #06070e30",
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  overrides: {
    /* Link hover color */
    MuiLink: {
      root: {
        "&:hover": {
          color: "#20c0c5", // primary color
        },
      },
    },
    /* Backdrop color */
    MuiBackdrop: {
      root: {
        backgroundColor: "#25374638",
      },
    },
    /* Paper color */
    /* MuiPaper: {
      root: {
        backgroundColor: "#071F2C",
      },
    }, */
    /* Card color */
    MuiCard: {
      root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
      },
    },
    /* Card hover text */
    MuiCardActionArea: {
      root: {
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
    /* Card content text color */
    MuiCardContent: {
      root: {
        fontSize: "12px",
      },
    },
    /* Table color */
    MUIDataTable: {
      root: {
        borderRadius: "12px !important",
      },
    },
    MUIDataTable: {
      paper: {
        background: "transparent",
      },
    },
    MUIDataTableHead: {
      border: "1px solid white !important",
    },
    /* Toolbar styles */
    MUIDataTableToolbar: {
      root: {
        background: "#1a2129b0",
        backdropFilter: "blur(1px)",
      },
      actions: {
        background: "transparent",
        "& svg": {
          color: "#fff",
        },
      },
      "&:nth-child(1)": {
        background: "#d12465ad",
        border: "1px solid #fff9",
      },
    },
    // First column Header
    MUIDataTableHeadCell: {
      fixedHeader: {
        backgroundColor: "rgb(25 33 41)",
        "& .MuiButton-label": {
          color: "#fff",
        },
      },
      // when click on titles of first columns
      sortActive: {
        color: "#287175",
      },
    },
    /* Cell color, each one of individually columns, including text and border */
    MuiTableCell: {
      root: {
        border: "0px",
        borderBottom: "0px !important",
        background: "#fbfbfb",
        color: "#000",
      },
      head: {
        color: "#fff",
      },
      body: {
        border: "0px",
        borderBottom: "0px !important",
        background: "rgb(33, 43, 54)",
        color: "#fff",

        "& a": {
          color: "#fff",
          "&:active": {
            color: "#287175",
          },
        },
      },
      footer: {
        border: "0px",
        borderTop: "0px",
        background: "rgb(33, 43, 54)",

        "& svg": {
          color: "#fff",
        },
      },
    },
    MuiTableRow: {
      /* root: {
        boxShadow: "0px 0px 10px #00000057",
        display: "table-row",
        outline: 0,
      }, */
    },
    MUIDataTableSelectCell: {
      headerCell: {
        border: "1px solid #287175",
      },
    },
    /* Table pagination text color */
    MuiTablePagination: {
      root: {
        color: "#fff",
        "& .MuiTablePagination-select": {
          color: "#fff",
        },
      },
    },
    /* Icons pagination color arrows on click */
    MuiIconButton: {
      root: {
        color: "#20c0c5",
        "& span": {
          color: "#20c0c5",
        },
      },
    },
    MuiMenu: {
      paper: {
        overflow: "visible",
      },
    },
    MuiStepIcon: {
      root: {
        color: "#9e9e9e",
        "&$active": {
          color: "#20f1c4",
        },
        "&$completed": {
          color: "#20c0c5",
        },
      },
    },
  },
});

export default theme;
