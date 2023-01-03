import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import {useStyles} from "./styles"
import {Paper, Typography} from "@mui/material";

interface BackButtonProps {
  path: string;
  text?: string;
}

export const BackButton = ({path, text}: BackButtonProps) => {
  const styles = useStyles()
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(`${path}`);
  };

  return (
    <Paper variant="outlined" className={styles.main}>
      <IconButton
        onClick={handleClickButton}
        color="primary"
        className={styles.iconButton}
      >
        <ArrowBackIcon />
      </IconButton>
      {text &&
        <Typography variant="caption" className={styles.label}>
          {text}
        </Typography>
      }
    </Paper>
  );
};
