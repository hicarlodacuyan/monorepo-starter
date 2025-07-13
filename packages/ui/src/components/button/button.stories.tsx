import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const Disabled: Story = {
  args: {
    children: "Can't Click Me",
    disabled: true,
  },
};

export const CustomClassName: Story = {
  args: {
    children: "With Extra Style",
    className: "rounded-full border-4 border-white",
  },
};
