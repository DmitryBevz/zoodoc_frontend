import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    "&.MuiPaper-root": {
      boxShadow: "3px 3px 3px #dedede",
      border: "1px solid #dedede",
      borderRadius: 12,
      padding: 20,
    },
  },
  deleteProfile: {
    marginTop: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  fullName: {
    "&.MuiTypography-root": {
      fontSize: 20,
      fontWeight: 400,
      marginLeft: 20,
    },
  },

  forms: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  field: {
    "&.MuiTextField-root": {
      marginTop: 20,
    },
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
  submit: {
    "&.MuiButton-root": {
      marginTop: 20,
    },
  },
}));
