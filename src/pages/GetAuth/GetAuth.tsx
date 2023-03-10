import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { Typography, Button, Box, IconButton } from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import MedicalCard from "@mui/icons-material/AssignmentInd";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";

import { selectIsUser } from "../../redux/slices/user/selectors/userSelectors";

import { useStyles } from "./styles";

export const GetAuth = () => {
  const styles = useStyles();
  const isAuth = useSelector(selectIsUser);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box className={styles.wrapper}>
      <section className={styles.greenSide}>
        <svg
          id="Capa_1"
          enableBackground="new 0 0 511.73 511.73"
          height="512"
          viewBox="0 0 511.73 511.73"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.greenSideBigIcon}
          fill="#8ed1c5"
        >
          <g id="XMLID_195_">
            <g id="XMLID_441_">
              <path
                id="XMLID_273_"
                d="m202.538 509.203c-23.564 0-47.124-8.754-65.095-26.279-8.501-8.29-15.249-17.943-20.057-28.692-12.438-27.812-34.605-49.979-62.417-62.417-10.749-4.807-20.402-11.555-28.692-20.057-35.129-36.027-35.021-94.545.241-130.448 14.346-14.607 32.603-23.911 52.796-26.908 11.488-1.705 21.703-6.828 29.54-14.814l.608-.614c21.855-21.855 53.027-31.422 87.772-26.937 33.3 4.299 66.126 21.154 92.433 47.461s43.163 59.133 47.461 92.433c4.485 34.746-5.081 65.917-26.937 87.773l-.552.548c-8.009 7.873-13.136 18.099-14.833 29.58-2.987 20.207-12.289 38.476-26.898 52.833-17.997 17.687-41.686 26.538-65.37 26.538zm-21.528-308.327c-19.49 0-37.304 6.281-50.335 19.312l-.403.407c-12.456 12.693-28.552 20.811-46.555 23.483-13.684 2.031-26.062 8.343-35.797 18.254-23.919 24.353-23.993 64.046-.165 88.482 5.636 5.78 12.184 10.361 19.461 13.616 34.557 15.455 62.1 42.998 77.555 77.555 3.255 7.278 7.836 13.826 13.615 19.461 24.443 23.835 64.142 23.755 88.495-.177 9.914-9.742 16.224-22.129 18.248-35.822 2.66-17.994 10.776-34.101 23.472-46.58l.377-.374c15.131-15.131 21.664-37.405 18.396-62.719-3.455-26.76-17.277-53.417-38.921-75.061-26.051-26.053-58.58-39.837-87.443-39.837z"
              />
            </g>
            <g id="XMLID_481_">
              <path
                id="XMLID_270_"
                d="m302.428 154.533c-17.302 0-32.797-6.104-44.302-17.609-13.428-13.427-19.498-32.292-17.093-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.245-24.731 53.776-26.987 20.829-2.402 39.692 3.667 53.12 17.093 13.428 13.428 19.498 32.293 17.094 53.121-2.255 19.531-11.839 38.629-26.987 53.776-15.147 15.148-34.246 24.732-53.777 26.987-2.983.345-5.926.516-8.818.516zm28.051-121.999c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.004 18.397-10.382 10.382-16.916 23.169-18.398 36.005-1.333 11.54 1.688 21.649 8.504 28.466 6.817 6.817 16.929 9.836 28.466 8.505 12.836-1.482 25.623-8.016 36.005-18.398s16.916-23.168 18.397-36.004c1.333-11.54-1.688-21.649-8.505-28.466-5.762-5.763-13.879-8.813-23.223-8.813z"
              />
            </g>
            <g id="XMLID_483_">
              <path
                id="XMLID_267_"
                d="m101.05 162.166c-17.303 0-32.797-6.104-44.302-17.608-13.428-13.428-19.499-32.292-17.094-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.246-24.731 53.776-26.987 20.831-2.404 39.693 3.667 53.12 17.093 13.428 13.428 19.499 32.293 17.094 53.121-2.255 19.531-11.839 38.629-26.987 53.776-15.147 15.148-34.246 24.732-53.777 26.987-2.981.345-5.925.515-8.817.515zm28.051-121.998c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.004 18.397-10.383 10.383-16.916 23.17-18.399 36.006-1.332 11.54 1.688 21.649 8.505 28.466 6.816 6.816 16.923 9.839 28.466 8.504 12.836-1.482 25.623-8.016 36.005-18.398s16.916-23.169 18.397-36.004c1.333-11.54-1.688-21.649-8.504-28.466-5.763-5.763-13.88-8.813-23.224-8.813z"
              />
            </g>
            <g id="XMLID_84_">
              <path
                id="XMLID_242_"
                d="m421.633 273.738c-17.302 0-32.797-6.104-44.302-17.608-13.428-13.428-19.499-32.292-17.094-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.246-24.731 53.777-26.986 20.826-2.409 39.692 3.666 53.12 17.093s19.499 32.292 17.094 53.12c-2.255 19.531-11.839 38.629-26.986 53.777-15.148 15.147-34.247 24.731-53.777 26.987-2.983.343-5.927.514-8.819.514zm28.051-121.998c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.005 18.398-10.382 10.382-16.916 23.168-18.398 36.004-1.332 11.54 1.688 21.649 8.505 28.466s16.928 9.84 28.466 8.504c12.836-1.482 25.623-8.016 36.005-18.397 10.382-10.382 16.916-23.169 18.397-36.005 1.333-11.54-1.688-21.649-8.504-28.466-5.763-5.763-13.879-8.812-23.224-8.812z"
              />
            </g>
            <g id="XMLID_3_">
              <path
                id="XMLID_239_"
                d="m411.549 472.665c-17.302 0-32.797-6.104-44.302-17.608-13.428-13.428-19.499-32.292-17.094-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.246-24.731 53.777-26.986 20.826-2.408 39.692 3.666 53.12 17.093s19.499 32.292 17.094 53.12c-2.255 19.531-11.839 38.629-26.986 53.777-15.148 15.147-34.247 24.731-53.777 26.987-2.983.344-5.927.514-8.819.514zm28.051-121.997c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.005 18.398-10.382 10.382-16.916 23.168-18.398 36.004-1.332 11.54 1.688 21.649 8.505 28.466 6.816 6.817 16.929 9.838 28.466 8.504 12.836-1.482 25.623-8.016 36.005-18.397 10.382-10.382 16.916-23.169 18.397-36.005 1.333-11.54-1.688-21.649-8.504-28.466-5.763-5.763-13.879-8.812-23.224-8.812z"
              />
            </g>
          </g>
        </svg>
        <Box className={styles.greenSideListInfo}>
          <Box className={styles.listWrapper}>
            <Box className={styles.greenSideListInfoItem}>
              <Typography variant="h6" className={styles.listItemText}>
                <SearchIcon className={styles.greenSideListInfoIcon} />
                ?????????????????? ???????????????? ??????. ????????????.
              </Typography>
            </Box>
            <Box className={styles.greenSideListInfoItem}>
              <Typography variant="h6" className={styles.listItemText}>
                <EventNoteIcon className={styles.greenSideListInfoIcon} />
                ?????????????????????? ???? ????????????.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" className={styles.listItemText}>
                <MedicalCard className={styles.greenSideListInfoIcon} />
                ???????????????????? ?????????????? ????????????.
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>
      <section className={styles.loginSide}>
        <Box className={styles.loginSideWrapper}>
          <Typography className={styles.logoLabel}>
            <b>???????????????????????? ???????????? ZooDoc</b>
          </Typography>
          <PetsIcon />
          <Typography variant="h4" className={styles.loginSideTitle}>
            ?? ??????????'?? ?????? ?????????? ?????????????????? ????????????
          </Typography>
          <Typography className={styles.loginSideSubTitle}>
            <b>???????????????? ?????????????????? ??????. ?????????? ??????????!</b>
          </Typography>
          <Link to="/register" className={styles.link}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              className={styles.loginSideBtn}
            >
              <Typography>????????????????????</Typography>
            </Button>
          </Link>
          <Link to="/login" className={styles.link}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className={styles.loginSideBtn}
          >
            <Typography color="white">????????????</Typography>
          </Button>
          </Link>

          <Box className={styles.socialBtnsBlock}>
            <Typography className={styles.socialBtnsLabel}>
              <b>???????????? ???? ??????????????????</b>
            </Typography>

            <Box className={styles.socialBtns}>
              <IconButton>
                <GoogleIcon color="primary" />
              </IconButton>
              <IconButton>
                <FacebookIcon color="primary" />
              </IconButton>
              <IconButton>
                <AppleIcon color="primary" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};
