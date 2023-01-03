import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  postsHeader: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    padding: "8px 15px 24px 15px",
    "&.MuiPaper-root":{
      border: "none",
      backgroundColor: "#f5f5f5",
    }
  },
  postsHeaderContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  label: {
    "&.MuiTypography-root": {
      fontWeight: 400,
      fontSize: 16,
    },
  },

  [theme.breakpoints.down(350)]: {
    postsHeaderContent: {
      flexDirection: "column",
    },
  },
}));
