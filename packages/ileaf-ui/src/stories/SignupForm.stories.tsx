import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Story = StoryObj<typeof SignupForm>;

export default {
  title: "Auth/SignupForm",
  component: SignupForm,
} as Meta;

const Template: Story<{ emailRegex?: RegExp; buttonText?: string }> = (
  args
) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <SignupForm {...args} />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  buttonText: "Sign Up",
};

export const WithoutRegex = Template.bind({});
WithoutRegex.args = {
  buttonText: "Sign Up",
};
