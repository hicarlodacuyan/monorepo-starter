"use client";

import * as React from "react";
import { createTheme, Theme } from "@mui/material/styles";
import { blue, pink } from "@mui/material/colors";
import { UiProvider } from "@repo/ui/theme/UiProvider";
import { Spinner } from "@repo/ui/components/spinner/spinner";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme | null>(null);

  React.useEffect(() => {
    const loadTheme = async () => {
      await sleep(500);

      const mockTenantTheme = {
        primaryColor: blue[500],
        secondaryColor: pink[300],
      };

      const customTheme = createTheme({
        palette: {
          primary: { main: mockTenantTheme.primaryColor },
          secondary: { main: mockTenantTheme.secondaryColor },
        },
      });

      setTheme(customTheme);
    };

    loadTheme();
  }, []);

  if (!theme) {
    return <Spinner />;
  }

  return <UiProvider theme={theme}>{children}</UiProvider>;
};
