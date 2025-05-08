import React from "react";
import { Meta } from "@storybook/react";
import ChangePassword from "../components/form/ChangePassword";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default {
  title: "Auth/ChangePassword",
  component: ChangePassword,
} as Meta;

const Template = (args) => {
  const client = new QueryClient();
  const handleChangePassword = async (data) => {
    console.log("Change Password Data:", data);
    // Simulate a successful password change
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ChangePassword handleChangePassword={handleChangePassword} {...args} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export const Default = {
  render: (args) => <Template {...args} />,
};
