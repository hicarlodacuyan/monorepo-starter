"use client";

import { CircularProgress, CircularProgressProps } from "@mui/material";
import clsx from "clsx";

type SpinnerSize = "sm" | "md" | "lg" | "xl";
type SpinnerColorVariant = "primary" | "light" | "inherit";

export interface SpinnerProps extends CircularProgressProps {
  size?: SpinnerSize;
  colorVariant?: SpinnerColorVariant;
  className?: string;
}

const sizeMap: Record<SpinnerSize, number> = {
  sm: 16,
  md: 32,
  lg: 64,
  xl: 96,
};

export const Spinner = ({
  size = "md",
  colorVariant = "primary",
  className,
  ...rest
}: SpinnerProps) => {
  return (
    <div className={clsx("inline-flex items-center justify-center", className)}>
      <CircularProgress
        aria-label="Progress Bar"
        role="progressbar"
        size={sizeMap[size]}
        color={colorVariant === "light" ? "inherit" : colorVariant}
        {...rest}
      />
    </div>
  );
};
