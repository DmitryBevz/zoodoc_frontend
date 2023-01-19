import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  dialogTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconButton: {
    marginRight: 20,
  },

  label: {
    display: "flex",
    alignItems: "center",
  },
  labelText: {
    "&.MuiTypography-root": {
      fontWeight: 700,
      marginLeft: 10,
    },
  },

  connectDialogContent: {
    display: "flex",
    flexDirection: "column",
  },
});
