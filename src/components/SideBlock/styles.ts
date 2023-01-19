import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    border: "1px solid #dedede",
    "&.MuiPaper-root": {
      boxShadow: "3px 3px 3px #dedede",
    },
  },

  title: {
    padding: "15px 15px 0 15px",
  },
});
