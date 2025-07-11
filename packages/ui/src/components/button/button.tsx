"use client";

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import clsx from "clsx";

interface CustomButtonProps extends MuiButtonProps {
  className?: string;
}

export const Button = ({ children, className, ...rest }: CustomButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      className={clsx(
        "bg-primary-main text-white font-bold text-base px-6 py-2 normal-case hover:bg-primary-dark m-4",
        className,
      )}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
