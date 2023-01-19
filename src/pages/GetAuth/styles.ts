import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  greenSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3f4f1",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down(810)]: {
      display: "none",
    },
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    border: "none",
  },
  greenSideBigIcon: {
    position: "absolute",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    opacity: 0.25,
  },
  greenSideListInfo: {
    backgroundColor: "#fff",
    borderRadius: 20,
    opacity: 0.55,
    position: "relative",
    listStyle: "none",
    margin: 0,
    padding: "30px 10px",
    width: 360,
    display: "flex",
    justifyContent: "center",
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "#fff",
      fontWeight: 500,
      fontSize: 16,
    },
  },
  listWrapper: {
    margin: "0 auto",
  },
  greenSideListInfoItem: {
    marginBottom: 20,
  },
  greenSideListInfoIcon: {
    fontSize: 33,
    marginRight: 15,
    color: "#000",
  },
  listItemText: {
    "&.MuiTypography-root": {
      color: "#000",
    },
  },

  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
    [theme.breakpoints.down(810)]: {
      margin: "0 auto",
      flex: 1,
      padding: 15,
      backgroundColor: "#fafafa",
    },
  },
  logoLabel: {
    display: "none",
    [theme.breakpoints.down(810)]: {
      display: "block",
      textAlign: "center",
      marginTop: -90,
      marginBottom: 80,
      fontSize: 20,
    },
    [theme.breakpoints.down(378)]: {
      fontSize: 15,
      marginTop: -50,
      marginBottom: 50,
    },
    [theme.breakpoints.down(315)]: {
      fontSize: 15,
      marginTop: -30,
      marginBottom: 30,
    },
    [theme.breakpoints.down(310)]: {
      display: "none",
    },
  },
  loginSidePetIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 55,
    marginTop: 20,
  },
  loginSideSubTitle: {
    padding: "20px 0px",

    [theme.breakpoints.down(810)]: {
      padding: 0,
      textAlign: "center",
    },
  },
  loginSideBtn: {
    "&.MuiButton-root": {
      marginBottom: 20,
      borderRadius: 8,
    },
  },
  firstBtn: {
    color: "#1ada6a",
  },
  windowDialog: {
    margin: "0 auto",
  },
  loginSideField: {
    marginBottom: 20,
  },
  socialBtnsBlock: {
    maxWidth: 200,
    margin: "0 auto",
  },
  socialBtnsLabel: {
    textAlign: "center",
    marginTop: 20,
  },
  socialBtns: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
  },

  radioContainer: {
    display: "flex",
    justifyContent: "center",
  },
  radioBtnLabel: {
    display: "flex",
    justifyContent: "center",
  },
}));
