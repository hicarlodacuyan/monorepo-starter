import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#007aff",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});
