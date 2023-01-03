import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    padding: "0px 0px 10px",
    "&.MuiPaper-root":{
      border: "none",
      backgroundColor: "#f5f5f5",
    }
  },

  iconButton: {
    marginRight: 20,
    width: 35,
    height: 35,
  },

  label: {
    "&.MuiTypography-root": {
      fontWeight: 400,
      fontSize: 16,
      marginTop: 3,
    },
  },
});
