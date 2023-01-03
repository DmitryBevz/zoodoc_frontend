import React from "react";
import { useDispatch } from "react-redux";

import { Box, Link as MuiLink, Typography } from "@mui/material";

import { closeModal, openModal } from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";
import { sendFeedback } from "../../redux/slices/auth";

import { useStyles } from "./style";

export interface SendMessage {
  subject: string;
  message: string;
}

export const Footer = () => {
  const styles = useStyles();
  const dispatch = useDispatch<any>();
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [isConfirm, setIsConfirm] = React.useState(false);

  const handleSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const connectUs = () => {
    dispatch(
      openModal({
        type: ModalType.Connect,
        payload: {
          handleMessage: handleMessage,
          handleSubject: handleSubject,
        },
        onCancel: async () => {
          await dispatch(closeModal(ModalType.Connect));
          setSubject("");
          setMessage("");
        },
        onSubmit: async () => {
          setIsConfirm(true);
          await dispatch(closeModal(ModalType.Connect));
          setSubject("");
          setMessage("");
        },
      })
    );
  };

  React.useEffect(() => {
    const params = {
      subject: subject,
      message: message,
    };
    if (isConfirm) {
      dispatch(sendFeedback(params as SendMessage));
      setIsConfirm(false);
    }
  }, [isConfirm]);

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
            onClick={connectUs}
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
