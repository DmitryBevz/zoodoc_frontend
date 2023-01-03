import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    minWidth: 400,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  uploadImage: {
    color: "#dedede",
    cursor: "pointer",
    "&.css-i4bv87-MuiSvgIcon-root":{
      fontSize: "150px",
    }
  },

  cropContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
    background: '#333',
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
  },

  [theme.breakpoints.down(600)]: {
    dialog: {
      minWidth: 280,
      minHeight: 210,
    },
    uploadImage: {
      "&.css-i4bv87-MuiSvgIcon-root":{
        fontSize: "100px",
      }
    },
  }
}));
