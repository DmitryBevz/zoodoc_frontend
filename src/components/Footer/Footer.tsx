import React from "react";
import { useDispatch } from "react-redux";

import { Box, Link as MuiLink, Typography } from "@mui/material";

import { closeModal, openModal } from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";

import { useStyles } from "./style";

export interface SendMessage {
  subject: string;
  message: string;
}

export const Footer = () => {
  const styles = useStyles();
  const dispatch = useDispatch<any>();

  return (
    <Box className={styles.container}>
      <Box className={styles.links}>
        <Typography>
          <MuiLink
            href="https://www.instagram.com/"
            target="_blank"
            className={styles.link}
          >
            Instagram
          </MuiLink>
        </Typography>
        <Typography className={styles.middot}>|</Typography>
        <Typography>
          <Typography
            component="span"
            className={styles.link}
          >
            Зв'язатись з нами
          </Typography>
        </Typography>
      </Box>
      <Box className={styles.info}>
        <Typography className={styles.description}>
          © ZOODOC, {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};
