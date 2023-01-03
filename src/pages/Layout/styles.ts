import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
    outlet: {
        width: "100%",
    },

    [theme.breakpoints.down(953)]: {
        sideBar: {
            display: "none",
        },
        tagsBlock: {
            display: "none",
        },
    },
}))
