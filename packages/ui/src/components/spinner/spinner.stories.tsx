import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
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

export const Light: Story = {
  args: {
    size: "md",
    colorVariant: "light",
    className: "bg-gray-900 p-4 rounded",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    colorVariant: "primary",
  },
};

export const WithCustomClass: Story = {
  args: {
    size: "lg",
    className: "border p-4 bg-gray-100 rounded",
  },
};
