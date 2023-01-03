import * as React from "react";
import {styled} from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import {useStyles} from "./styles";

export const Switcher = styled((props: any) =>(
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        value={props.value}
        onChange={props.onChange}
        disableRipple
        disabled={props.disabled}
        {...props}
    />
))(useStyles)
