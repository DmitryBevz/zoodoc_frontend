import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { NoPost } from "./components/noPost/NoPost";

import blog from "../../assets/img/blog.png"
import { useStyles } from "./style";
import { selectUserData } from "../../redux/slices/user/selectors/userSelectors";

export const Home = () => {
  const styles = useStyles();
  const [tabValue, setTabValue] = React.useState("all");
  const dispatch = useDispatch<any>();
  const userData = useSelector(selectUserData);

  const handleChangeTab = (event: any, newValue: React.SetStateAction<string>) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Paper variant="outlined" className={styles.postsHeader}>
        <Box className={styles.postsHeaderContent} style={{ marginTop: -6 }}>
          <Typography className={styles.label}>Новини</Typography>
          <TabContext value={tabValue}>
            <TabList onChange={handleChangeTab}>
              <Tab label="Усі" value="all" />
              <Tab label="Популярні" value="popular" />
            </TabList>
          </TabContext>
        </Box>
      </Paper>
      
      
    </>
  );
};
