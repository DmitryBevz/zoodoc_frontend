import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { Container, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

import { SideMenu } from "../SideMenu/SideMenu";

import { useStyles } from "./styles";

export const Header = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const urlPath = location.pathname === "/sign-in" || location.pathname === "/login" || location.pathname === "/register";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={styles.header}>
      <Container maxWidth="lg">
        <Box className={styles.inner}>
          <IconButton className={styles.drawerItem} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer
            open={open}
            anchor="left"
            onClose={handleDrawerClose}
            transitionDuration={600}
          >
            <MenuItem className={styles.root} onClick={handleDrawerClose}>
              <SideMenu />
            </MenuItem>
          </Drawer>

          {urlPath ? (
            <Link className={styles.mailLabel} to="/">ZooDoc</Link>
          ) : (
            <Link className={styles.logo} to="/">
              <Box className={styles.logoText}>ZooDoc</Box>
            </Link>
          )}
          <Box className={styles.buttons}>
            {/* {isAuth && (
              <Box style={{ display: "flex", alignItems: "center" }}>
                <CreatePost />
                <AccountMenu />
              </Box>
            )} */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
