import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router";
import { AuthLayout } from "../components";
import SignupForm from "../components/auth/SignupForm";

type Story = StoryObj<typeof SignupForm>;

export default {
  title: "Auth/SignupForm",
  component: SignupForm,
} as Meta;

const Template: Story<{ emailRegex?: RegExp; buttonText?: string }> = (
  args
) => (
  <BrowserRouter>
    <SignupForm {...args} />
  </BrowserRouter>
);

const View: Story<{ emailRegex?: RegExp; buttonText?: string }> = (args) => (
  <BrowserRouter>
    <AuthLayout
      logoSrc="https://www.ileafsolutions.com/assets/images/logo.svg"
      backgroundColor="#0b012d"
      headerColor="#fff"
      title="Create new Account"
    >
      <SignupForm {...args} />
    </AuthLayout>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  buttonText: "Sign Up",
};

export const WithoutRegex = Template.bind({});
WithoutRegex.args = {
  buttonText: "Sign Up",
};

export const WithLayout = View.bind({});
WithoutRegex.args = {
  buttonText: "Sign Up",
  onSubmit: (val) => {
    console.log("values", val);
  },
};
