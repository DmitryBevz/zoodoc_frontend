import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  updateUserInfo,
  fetchAuthMe,
  deleteUser,
} from "../../../../redux/slices/auth";
import {selectUserData, selectUserDataStatus} from "../../../../redux/slices/selectors/authSelectors";

import { closeModal, openModal } from "../../../../redux/slices/modal";
import { ModalType } from "../../../../redux/types/modal";

import { useToast } from "../../../../hooks/useToast";
import { useStyles } from "./styles";

export const EditProfile = () => {
  const styles = useStyles();
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const updateUserDataStatus = useSelector(selectUserDataStatus);
  const [userInfo, setUserInfo] = React.useState({
    fullName: userData?.fullName ?? "",
    email: userData?.email ?? "",
    phoneNumber: userData?.phoneNumber ?? "",
    bio: userData?.bio ?? "",
    youtube: userData?.youtube ?? "",
    instagram: userData?.instagram ?? "",
    website: userData?.website ?? "",
  });
  const notify = useToast();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value.trim() });
  };

  const handleUpdateInfo = () => {
    dispatch(
      openModal({
        type: ModalType.UpdateUserData,
        onCancel: () => {
          dispatch(closeModal(ModalType.UpdateUserData));
        },
        onSubmit: async () => {
          const { payload } = await dispatch(updateUserInfo(userInfo));
          if (!payload.response) {
            await dispatch(fetchAuthMe());
            navigate("/profile");
          } else if (payload.response.data.errors) {
            notify(payload.response.data.errors[0].msg, "error", {
              position: "top-center",
            });
          } else {
            notify("Невідома помилка");
          }
          dispatch(closeModal(ModalType.UpdateUserData));
        },
      })
    );
  };

  const deleteProfile = () => {
    dispatch(
      openModal({
        type: ModalType.DeleteUser,
        onCancel: () => {
          dispatch(closeModal(ModalType.DeleteUser));
        },
        onSubmit: async () => {
          const data = await dispatch(deleteUser());
          if (data.payload) {
            window.open("/", "_self");
          }

          dispatch(closeModal(ModalType.DeleteUser));
        },
      })
    );
  };

  return (
    <>
      <Paper className={styles.paper}>
        {updateUserDataStatus ? (
          "...Loading"
        ) : (
          <>
            <Box>
              <Box className={styles.info}>
                {userData?.avatarUrl?.location ? (
                  <Avatar src={userData.avatarUrl.location} />
                ) : (
                  <Avatar />
                )}
                <Typography className={styles.fullName}>
                  {userData?.fullName}
                </Typography>
              </Box>

              <Box className={styles.info}>
                <Box className={styles.forms}>
                  <TextField
                    name="fullName"
                    label="Ім'я"
                    value={userInfo.fullName}
                    onChange={handleChange}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="email"
                    label="Пошта"
                    value={userInfo.email}
                    onChange={handleChange}
                    size="small"
                    className={styles.field}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="phoneNumber"
                    label="Телефон"
                    value={userInfo?.phoneNumber}
                    onChange={handleChange}
                    size="small"
                    className={styles.field}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="bio"
                    label="БІО"
                    multiline
                    rows={3}
                    maxRows={5}
                    className={styles.field}
                    value={userInfo?.bio}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="youtube"
                    label="YouTube"
                    value={userInfo?.youtube}
                    onChange={handleChange}
                    size="small"
                    className={styles.field}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="instagram"
                    label="Instagram"
                    value={userInfo?.instagram}
                    onChange={handleChange}
                    size="small"
                    className={styles.field}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="website"
                    label="Website"
                    value={userInfo?.website}
                    onChange={handleChange}
                    size="small"
                    className={styles.field}
                    InputLabelProps={{ shrink: true }}
                  />

                  <Button
                    variant="outlined"
                    fullWidth
                    className={styles.submit}
                    onClick={handleUpdateInfo}
                  >
                    Зберегти
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Paper>
      <Paper className={`${styles.paper} ${styles.deleteProfile}`}>
        <Typography>Видалити профіль</Typography>
        <Button variant="outlined" color="error" onClick={deleteProfile}>
          Видалити
        </Button>
      </Paper>
    </>
  );
};
