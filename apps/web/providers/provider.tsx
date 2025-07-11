"use server";

import * as React from "react";
import { ThemeProvider } from "./theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = async ({ children }: AppProviderProps) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};
