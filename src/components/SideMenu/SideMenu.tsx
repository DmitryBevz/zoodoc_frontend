import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Box, Hidden } from "@mui/material";
import Typography from "@mui/material/Typography";

import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";

import { selectUserData } from "../../redux/slices/selectors/authSelectors";

import { SideBlock } from "../SideBlock/SideBlock";

import { useStyles } from "./styles";

export const SideMenu = () => {
  const styles = useStyles();
  const userData = useSelector(selectUserData);
  return (
    <Box className={styles.sideBar}>
      <ul className={styles.sideMenuList}>
        <li className={styles.sideMenuListItem}>
          <Link to="/" className={styles.sidebarLink}>
            <Box>
              <ListOutlinedIcon />
              <Hidden smDown>
                <Typography
                  className={styles.sideMenuListItemLabel}
                  variant="h6"
                >
                  Новини
                </Typography>
              </Hidden>
            </Box>
          </Link>
        </li>
      </ul>
      {userData && (
        <SideBlock title="">
          <ul className={styles.sideMenuList}>
            <li className={styles.listItemBlock}>
              <Link to="/my-cars" className={styles.sidebarLink}>
                <Box>
                  <GarageOutlinedIcon />
                  <Hidden smDown>
                    <Typography
                      className={styles.sideMenuListItemLabel}
                      variant="h6"
                    >
                      Мої тварини
                    </Typography>
                  </Hidden>
                </Box>
              </Link>
            </li>
          </ul>
        </SideBlock>
      )}
    </Box>
  );
};
