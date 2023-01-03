import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {},
  links: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    "&.MuiTypography-root": {
      textDecoration: "none",
      fontSize: 12,
      color: "#c7c7c7",
      fontWeight: 700,
      cursor: "pointer",
    },
    "&:hover": {
      color: "#adadad",
    },
    "&:active": {
      color: "#c7c7c7",
    },
  },
  middot: {
    "&.MuiTypography-root": {
      fontSize: 20,
      padding: "0px 5px",
      color: "#c7c7c7",
    },
  },
  info: {},
  description: {
    "&.MuiTypography-root": {
      fontSize: 14,
      color: "#A9A9A9",
      fontWeight: 700,
      marginTop: 10,
    },
  },
});
