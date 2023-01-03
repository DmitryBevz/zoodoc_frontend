import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {useStyles} from "./styles";

export const SideBlock = ({title, children}: {title: string; children: React.ReactNode}) => {
    const styles = useStyles()
    return (
        <Paper classes={{root: styles.root}} sx={{borderRadius: 3}}>
            <Typography variant="h6" classes={{root: styles.title}}>
                {title}
            </Typography>
            {children}
        </Paper>
    );
};
