import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#81C8C8",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#CE5C5C",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
