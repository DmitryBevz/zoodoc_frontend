import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import moment from "moment/moment";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Tooltip,
  Link,
  Typography,
  Paper,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";

import TabList from "@mui/lab/TabList";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

import {
  updateProfileAvatar,
  updateProfileWallpaper,
} from "../../redux/slices/auth";
import { IAuthData } from "../../components/interfaces/auth/IAuth";
import { closeModal, openModal } from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";
import { useToast } from "../../hooks/useToast";

import { useStyles } from "./styles";
import "./icons.css";

interface UserPageProps {
  userData: IAuthData | null;
  anotherUserData?: IAuthData | null;
  isMyProfile?: boolean;
}

export const UserPage = ({
  userData,
  isMyProfile,
  anotherUserData,
}: UserPageProps) => {
  const styles = useStyles();
  const [tabsValue, setTabsValue] = React.useState("2");
  const [formState, setFormState] = React.useState({
    avatarUrl: {
      key: "",
      location: "",
    },
    wallpaperUrl: {
      key: "",
      location: "",
    },
  });

  const inputAvatarRef = React.useRef<HTMLInputElement>(null);

  const handleChangeTab = (
    event: React.SyntheticEvent,
    newValue: React.SetStateAction<string>
  ) => {
    setTabsValue(newValue);
  };

  // const handleFileUpload = async (event: React.ChangeEvent<any>) => {
  //   try {
  //     const params = {
  //       file: event.target.files[0],
  //     };
  //     const { payload } = await dispatch(saveDocument(params));
  //     setFormState({ ...formState, [event.target.name]: payload });
  //   } catch (error) {
  //     console.error(error);
  //     notify("Проблема з завантаженням файлу");
  //   }
  // };

  // React.useEffect(() => {
  //   if (formState.wallpaperUrl.location) {
  //     const fields = {
  //       wallpaperUrl: formState.wallpaperUrl,
  //     };
  //     userData?.wallpaperUrl?.location && dispatch(deleteDocument(userData?.wallpaperUrl?.key as string))
  //     dispatch(updateProfileWallpaper(fields));
  //   }
  // }, [formState.wallpaperUrl.location]);

  // React.useEffect(() => {
  //   if (formState.avatarUrl.location) {
  //     const fields = {
  //       avatarUrl: formState.avatarUrl,
  //     };
  //     userData?.avatarUrl?.location && dispatch(deleteDocument(userData?.avatarUrl?.key as string))
  //     dispatch(updateProfileAvatar(fields));
  //   }
  // }, [formState.avatarUrl.location]);

  // const onClickUpdateWallpaper = () => {
  //   dispatch(
  //     openModal({
  //       payload:{
  //         isCropper: true,
  //         onSaveWallpaper:handleFileUpload,
  //         setFormState:setFormState,
  //       },
  //       type: ModalType.Cropper,
  //       onCancel: () => {
  //         dispatch(closeModal(ModalType.Cropper));
  //       },
  //       onSubmit: () => {
  //         dispatch(closeModal(ModalType.Cropper));
  //       },
  //     })
  //   );
  // };

  return (
    <>
      <Paper
        variant="outlined"
        className={styles.user}
        sx={{ borderRadius: 3 }}
      >
        {isMyProfile ? (
          <Box
            className={`${styles.header} ${
              !formState.wallpaperUrl.location || styles.defaultWallpaper
            }`}
          >
            {formState.wallpaperUrl.location ? (
              <img
                className={`${styles.header} ${styles.wallpaper}`}
                src={formState.wallpaperUrl.location}
                alt="image"
              />
            ) : (
              <>
                {userData?.wallpaperUrl?.location ? (
                  <img
                    className={`${styles.header} ${styles.wallpaper}`}
                    src={userData?.wallpaperUrl?.location}
                    alt="image"
                  />
                ) : (
                  <Box
                    className={`${styles.header} ${styles.defaultWallpaper}`}
                  ></Box>
                )}
              </>
            )}
          </Box>
        ) : (
          <Box className={styles.header}>
            {anotherUserData?.wallpaperUrl?.location ? (
              <img
                className={`${styles.header} ${styles.wallpaper}`}
                src={anotherUserData?.wallpaperUrl.location}
                alt="image"
              />
            ) : (
              <Box
                className={`${styles.header} ${styles.defaultWallpaper}`}
              ></Box>
            )}
          </Box>
        )}
        <Box className={styles.userInfo}>
          <Box className={styles.imagesBlock}>
            {isMyProfile ? (
              <Tooltip title="Змінити аватар">
                <Avatar
                  src={
                    formState.avatarUrl?.location ||
                    userData?.avatarUrl?.location ||
                    ""
                  }
                  className={`${styles.muiAvatar} ${styles.wallpaperCursor}`}
                  onClick={() => inputAvatarRef.current?.click()}
                />
              </Tooltip>
            ) : (
              <Avatar
                src={anotherUserData?.avatarUrl?.location || ""}
                className={`${styles.muiAvatar}`}
              />
            )}

            <Box className={styles.changeButtonAndFollowers}>
              <Box>
                {isMyProfile && (
                  <Tooltip title="Змінити фон">
                    <EditOutlinedIcon
                      // onClick={onClickUpdateWallpaper}
                      className={styles.changeButtonSVG}
                    />
                  </Tooltip>
                )}
              </Box>
              <Box className={styles.statistics}>
                <Box className={`${styles.statisticsItem} ${styles.noPointer}`}>
                  <Typography>Cards</Typography>
                </Box>
                <Divider className={styles.divider} orientation="vertical" />
                <Box className={`${styles.statisticsItem} ${styles.noPointer}`}>
                  <Typography>Info</Typography>
                </Box>
                <Divider className={styles.divider} orientation="vertical" />
              </Box>
            </Box>
            <input
              ref={inputAvatarRef}
              type="file"
              accept="image/*"
              // onChange={handleFileUpload}
              name="avatarUrl"
              hidden
            />
            <Box className={`${styles.statistics} ${styles.statisticsMobile}`}>
              <Box className={styles.statisticsItem}>
                <Typography>Cards</Typography>
              </Box>
              <Divider className={styles.divider} orientation="vertical" />
              <Box className={styles.statisticsItem}>
                <Typography>Info</Typography>
              </Box>
              <Divider className={styles.divider} orientation="vertical" />
            </Box>
            <Box className={styles.nameAndFollow}>
              <h2 className={styles.fullName}>
                {isMyProfile ? userData?.fullName : anotherUserData?.fullName}
              </h2>
              {isMyProfile && (
                <Button
                  variant="outlined"
                  LinkComponent={Link}
                  href="/profile/edit"
                  className={styles.editButton}
                >
                  Редагувати профіль
                </Button>
              )}
            </Box>
            <Box className={styles.personalInfo}>
              <Box>
                <Typography className={styles.descriptionLabel}>
                  <Typography component="span">Пошта:</Typography> &nbsp;
                  <Typography component="span" className={styles.userName}>
                    {isMyProfile ? userData?.email : anotherUserData?.email}
                  </Typography>
                </Typography>
                <Typography className={styles.descriptionLabel}>
                  <Typography component="span">Телефон:</Typography> &nbsp;
                  <Typography component="span" className={styles.description}>
                    {isMyProfile
                      ? userData?.phoneNumber
                      : anotherUserData?.phoneNumber}
                  </Typography>
                </Typography>
                <Typography className={styles.bio}>
                  {isMyProfile ? userData?.bio : anotherUserData?.bio}
                </Typography>
              </Box>
              <Box className="process-section">
                <Box className="social-bar">
                  <Box className="social-icons text-center">
                    {(!!anotherUserData?.youtube || !!userData?.youtube) && (
                      <a
                        href={
                          isMyProfile
                            ? userData?.youtube
                            : anotherUserData?.youtube
                        }
                        target={"_blank"}
                        className="slider-nav-item"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    )}
                    {(!!anotherUserData?.instagram ||
                      !!userData?.instagram) && (
                      <a
                        href={`https://www.instagram.com/${
                          isMyProfile
                            ? userData?.instagram
                            : anotherUserData?.instagram
                        }/`}
                        target={"_blank"}
                        className="slider-nav-item"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {(!!anotherUserData?.website || !!userData?.website) && (
                      <a
                        href={
                          isMyProfile
                            ? userData?.website
                            : anotherUserData?.website
                        }
                        target={"_blank"}
                        className="slider-nav-item"
                      >
                        <i className="fas fa-globe-europe"></i>
                      </a>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>

            <TabContext value={tabsValue}>
              <TabList
                className={styles.root}
                onChange={handleChangeTab}
                sx={{
                  marginTop: 5,
                  "& .MuiTabs-fixed": {
                    display: "flex",
                    justifyContent: "center",
                  },
                  "& .MuiTab-root": {
                    minWidth: "50px",
                  },
                }}
              >
                <Tab
                  className={styles.tabs}
                  label={
                    <>
                      <EditOutlinedIcon className={styles.tabIcon} />
                      <Typography className={styles.tabsLabel}>Блог</Typography>
                    </>
                  }
                  value="1"
                />
                <Tab
                  label={
                    <>
                      <ImportContactsOutlinedIcon className={styles.tabIcon} />
                      <Typography className={styles.tabsLabel}>
                        Бортжурнали
                      </Typography>
                    </>
                  }
                  value="2"
                />
                {isMyProfile && (
                  <Tab
                    label={
                      <>
                        <BookmarkBorderIcon className={styles.tabIcon} />
                        <Typography className={styles.tabsLabel}>
                          Збережені
                        </Typography>
                      </>
                    }
                    value="3"
                  />
                )}
              </TabList>
            </TabContext>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
