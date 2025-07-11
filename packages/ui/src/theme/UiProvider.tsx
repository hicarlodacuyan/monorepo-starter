import { CssBaseline, ThemeProvider, Theme } from "@mui/material";
import { ReactNode } from "react";
import { theme as defaultTheme } from "./theme";

interface UiProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const UiProvider = ({
  children,
  theme = defaultTheme,
}: UiProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
