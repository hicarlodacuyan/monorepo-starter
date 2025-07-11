import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Example/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    colorVariant: {
      control: "select",
      options: ["primary", "light", "inherit"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    colorVariant: "primary",
  },
};

export const LargeLight: Story = {
  args: {
    size: "lg",
    colorVariant: "light",
    className: "bg-black p-4 rounded",
  },
};

export const ExtraLargeInherit: Story = {
  args: {
    size: "xl",
    colorVariant: "inherit",
  },
};
