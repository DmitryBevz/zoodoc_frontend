import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },

  header: {
    backgroundColor: "#fff",
    padding: "10px 0",
    borderBottom: "1px solid #e0e0e0",
  },

  drawerItem: {
    "&.MuiIconButton-root": {
      display: "none",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    backgroundColor: "black",
    color: "#fff",
    fontWeight: 700,
    lineHeight: "35px",
    textTransform: "uppercase",
    letterSpacing: 0.15,
    borderRadius: 5,
    padding: "0 10px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",

    "&:hover": {
      backgroundColor: "#4361ee",
    },
  },

  mailLabel: {
    fontWeight: 700,
    lineHeight: "35px",
    textTransform: "uppercase",
    letterSpacing: 0.15,
    margin: "0 auto",
    textDecoration: "none",
    border: "none",
    color: "#000",

    "&:hover": {
      color: "gray",
    },

    "&:active": {
      color: "#000",
    },
  },

  buttons: {
    "& button": {
      marginLeft: 10,
    },

    "& a": {
      textDecoration: "none",
    },
  },

  [theme.breakpoints.down(958)]: {
    drawerItem: {
      "&.MuiIconButton-root": {
        display: "block",
      },
    },

    logo: {
      margin: "auto",
      display: "flex",
      alignItems: "center",
    },
  },

  [theme.breakpoints.down(320)]: {
    logoText: {
      fontSize: 13,
    },

    logo: {
      margin: "auto",
      display: "flex",
      alignItems: "center",
    },

    buttons: {
      display: "flex",
      alignItems: "center",
    },
  },

  [theme.breakpoints.down(500)]: {
    logo: {
      margin: "auto",
      display: "flex",
      alignItems: "center",
    },
    buttons: {
      display: "flex",
      alignItems: "center",
    },
  },

  [theme.breakpoints.down(290)]: {
    logoText: {
      fontSize: 9,
    },
  },
}));
