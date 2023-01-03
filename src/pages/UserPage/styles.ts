import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  user: {
    boxShadow: "3px 3px 3px #dedede",
    border: "1px solid #dedede",
    marginBottom: 20,
  },
  tab: {
    padding: 30,
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    boxShadow: "5px 5px 5px #dedede",
    "&:hover": {
      border: "1px solid #81C8C8",
      boxShadow: "0 0 0 1px #81C8C8",
    },
  },

  header: {
    height: 220,
    borderRadius: 11,
  },
  defaultWallpaper: {
    backgroundColor: "#c4cfd6",
  },
  wallpaper: {
    width: "100%",
  },
  wallpaperCursor: {
    cursor: "pointer",
  },

  hideTab: {
    display: "none",
  },

  tabIcon: {
    "&.css-i4bv87-MuiSvgIcon-root":{
      display: "none",
    }
  },

  userInfo: {
    marginTop: -70,
    padding: 20,
    paddingTop: 0,
    fontSize: 16,

    "& .MuiAvatar-root": {
      width: "140px",
      height: "140px",
      border: "4px solid white",
      position: "static",
    },

    descriptionLabel: {
      fontWeight: 500,
    },

    "& ul": {
      display: "flex",
      margin: 0,
      padding: 0,
      listStyle: "none",
      flexWrap: "wrap",

      "& li": {
        marginRight: 30,
      },
    },

    fullName: {
      marginTop: 10,
      fontWeight: 900,
      fontSize: 20,
    },

    details: {
      color: "#5b7083",
    },

    userName: {
      color: "#5b7083",
    },

    description: {
      fontSize: 16,
    },
  },

  bio: {
    width: 290,
    "&.MuiTypography-root": {
      color: "#5b7083",
      wordBreak: "break-word",
    },
  },

  imagesBlock: {
    display: "flex",
    justifyContent: "space-between",
  },

  changeButtonAndFollowers: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    fontSize: 16,
    marginTop: 20,
    opacity: "0.85"
  },

  statistics:{
    display: "flex",
    gap: 15,
  },

  statisticsMobile:{
    display: "none",
  },

  statisticsItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    "& p": {
      fontSize: 14
    }
  },

  noPointer: {
    cursor: "default"
  },

  personalInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  nameAndFollow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  changeButtonSVG: {
    "&.MuiSvgIcon-root": {
      color: "rgb(37, 183, 188)",
      fontSize: 30,
      cursor: "pointer",
      backgroundColor: "#fff",
      border: "1px solid rgb(37, 183, 188)",
      borderRadius: "100%",
      padding: 3,
    },
  },

  [theme.breakpoints.down(945)]: {
    statistics: {
      gap: 10
    }
  },

  [theme.breakpoints.down(940)]: {
    bio: {
      width: 260
    }
  },

  [theme.breakpoints.down(650)]: {
    bio: {
      width: 220
    }
  },

  [theme.breakpoints.down(645)]: {
    statistics: {
      gap: 5
    }
  },

  [theme.breakpoints.down(480)]: {
    personalInfo: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      gap: 20
    },
    statistics: {
      display: "none",
    },
    bio: {
      width: "100%",
    },
    header:{
      height: 150
    },
    statisticsMobile:{
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "10px",
    },
    divider:{
      "&.css-ftc7wc-MuiDivider-root":{
        height: "42px",
      }
    },
    userInfo: {
      "& .MuiAvatar-root": {
        width: "100px",
        height: "100px",
      },
    },
  },

  [theme.breakpoints.down(400)]: {
    tabsLabel: {
      display: "none",
    },
    tabIcon: {
      "&.css-i4bv87-MuiSvgIcon-root":{
        display: "inline-block",
      }
    },
    tabs: {
      root: {
        padding: 0,
        minWidth: 10,
      },
    },
  },
}));
