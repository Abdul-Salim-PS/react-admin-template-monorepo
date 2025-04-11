import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "transparent"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    extraClasses: {
      control: "text",
    },
    onClick: { action: "clicked" },
    loaderColor: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
    disabled: false,
    loading: false,
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "md",
  },
};

export const Transparent: Story = {
  args: {
    children: "Transparent Button",
    variant: "transparent",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "primary",
    loading: true,
  },
};

export const CustomStyles: Story = {
  args: {
    children: "Custom Button",
    variant: "primary",
    extraClasses: "w-full mt-4 text-lg",
  },
};
