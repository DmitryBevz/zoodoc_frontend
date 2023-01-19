import React from "react";
import { Outlet } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { SideMenu, Footer } from "../../components";

import { useStyles } from "./styles";

export const Layout = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid style={{ justifyContent: "center" }} container spacing={3}>
        <Grid className={styles.sideBar} sm={1} md={2} item>
          <SideMenu />
        </Grid>
        <Grid className={styles.outlet} sm={10} md={7} item>
          <Outlet />
        </Grid>
        <Grid className={styles.tagsBlock} sm={1} md={3} item>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
