import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sideBar: {
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },

  sideMenuList: {
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },

  sidebarLink: {
    textDecoration: "none",
    color: "black",
  },

  sideMenuListItem: {
    cursor: "pointer",

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 25px 0 20px",
      width: "100%",
      borderRadius: 12,
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },

    "&:hover": {
      "& div": {
        backgroundColor: "#ececec",
        color: "rgb(37, 183, 188)",
      },
    },
  },

  sideMenuListItemIcon: {
    fontSize: 30,
    marginLeft: -5,
  },

  sideMenuImage: {
    width: 40,
    height: 20,
    marginLeft: -8,
  },

  byAuto: {
    fontWeight: 300,
    "&.MuiTypography-root": {
      fontSize: "12px",
    },
  },

  sideMenuListItemLabel: {
    fontWeight: 300,
    "&.MuiTypography-root": {
      fontSize: "12px",
      marginLeft: "10px",
    },
  },

  listItemBlock: {
    cursor: "pointer",

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 25px 0 20px",
      width: "100%",
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },

    "&:hover": {
      "& div": {
        backgroundColor: "#ececec",
        color: "rgb(37, 183, 188)",
      },
    },
  },
});
