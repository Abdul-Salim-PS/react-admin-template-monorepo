import React from "react";
import { Meta } from "@storybook/react";
import LoginForm from "../components/auth/LoginForm";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginProps } from "../types/login.interface";
import AuthLayout from "@components/auth/AuthLayout";

export default {
  title: "Auth/LoginForm",
  component: LoginForm,
} as Meta;

const Template = (args: LoginProps) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <LoginForm {...args} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const View = (args: LoginProps) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <AuthLayout
          logoSrc="https://www.ileafsolutions.com/assets/images/logo.svg"
          backgroundColor="#0b012d"
          headerColor="#fff"
        >
          <LoginForm {...args}></LoginForm>
        </AuthLayout>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export const Default = {
  render: (args: LoginProps) => <Template {...args} />,
  args: {
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    buttonText: "Sign in",
  },
};

export const WithoutRegex = {
  render: (args: LoginProps) => <Template {...args} />,
  args: {
    buttonText: "Login",
  },
};

export const WithLayout = {
  render: (args: LoginProps) => <View {...args} />,
  args: {
    buttonText: "Login",
    onSubmit: (val: any) => {
      alert(val);
    },
  },
};
