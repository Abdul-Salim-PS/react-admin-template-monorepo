import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AuthLayout from "@components/auth/AuthLayout";

const meta: Meta<typeof AuthLayout> = {
  title: "Components/Auth/AuthLayout",
  component: AuthLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    logoSrc: {
      control: "text",
    },
    title: {
      control: "text",
    },
    backgroundColor: {
      control: "text",
    },
    backgroundImage: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuthLayout>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        Login Form Content
      </div>
    ),
  },
};

export const WithLogo: Story = {
  args: {
    ...Default.args,
    logoSrc: "https://www.ileafsolutions.com/assets/images/logo.svg",
    title: "Welcome Back",
    headerColor: "#111",
  },
};

export const WithBackgroundImage: Story = {
  args: {
    ...Default.args,
    logoSrc: "https://www.ileafsolutions.com/assets/images/logo.svg",
    title: "Welcome Back",
    backgroundImage:
      "https://img.freepik.com/free-photo/mountain-covered-with-fogs_400718-5.jpg?t=st=1739275661~exp=1739279261~hmac=22dff47e3abe33a8238290e12b499ad7b40e489c7b30390bdba8771085102be9&w=996",
    headerColor: "#ffffff",
  },
};
