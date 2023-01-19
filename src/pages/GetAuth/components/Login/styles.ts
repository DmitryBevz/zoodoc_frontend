import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&.MuiPaper-root": {
      width: 400,
      padding: 50,
      backgroundColor: "#fff",
      border: "1px solid #dedede",
      boxShadow: "3px 3px 3px #dedede",
      borderRadius: 12,
      margin: "50px auto",
    },
  },

  field: {
    "&.MuiTextField-root": {
      marginBottom: "20px",
    },
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "30px",
  },

  login: {
    "&.MuiTypography-root": {
      color: "#fff",
    },
  },

  form: {
    marginTop: 20,
  },

  [theme.breakpoints.down(430)]: {
    root: {
      width: 370,
    },
  },

  [theme.breakpoints.down(380)]: {
    root: {
      width: 300,
    },
  },

  [theme.breakpoints.down(320)]: {
    root: {
      width: 230,
    },
  },
}));
