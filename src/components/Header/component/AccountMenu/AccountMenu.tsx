import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu, MenuItem,
  PopoverOrigin,
  Tooltip} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { logout } from "../../../../redux/slices/auth";
import {selectUserData} from "../../../../redux/slices/selectors/authSelectors";
import { closeModal, openModal } from "../../../../redux/slices/modal";
import { ModalType } from "../../../../redux/types/modal";

import { props, useStyles } from "./styles";

export const AccountMenu = () => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch<any>();
  const userData = useSelector(selectUserData);
  const userInitials = userData?.fullName?.slice(0, 1);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    dispatch(
      openModal({
        type: ModalType.Logout,
        onCancel: () => {
          dispatch(closeModal(ModalType.Logout));
        },
        onSubmit: () => {
          dispatch(logout(null));
          window.localStorage.removeItem("tokenBlog");
          dispatch(closeModal(ModalType.Logout));
        },
      })
    );
  };

  return (
    <>
      <Box className={styles.root}>
        <Tooltip title="Профіль">
          <IconButton
            onClick={handleClick}
            size="small"
            className={styles.iconButton}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {!userData!.avatarUrl ? (
              <Avatar className={styles.avatar}>{userInitials}</Avatar>
            ) : (
              <Avatar className={styles.avatar} src={userData!.avatarUrl.location} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={props.paperProps}
        transformOrigin={props.transformOriginProps as PopoverOrigin}
        anchorOrigin={props.anchorOrigin as PopoverOrigin}
      >
        <MenuItem>
          <Link to="/profile" className={styles.link}>
            <Avatar /> Мій профіль
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to="/profile/edit" className={styles.link}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Налаштування
          </Link>
        </MenuItem>
        <MenuItem onClick={onClickLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Вийти
        </MenuItem>
      </Menu>
    </>
  );
};
