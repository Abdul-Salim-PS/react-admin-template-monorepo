import React from "react";
import { Meta } from "@storybook/react";
import ProfileForm from "../components/form/ProfileForm";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default {
  title: "Auth/ProfileForm",
  component: ProfileForm,
} as Meta;

const Template = (args) => {
  const client = new QueryClient();
  
  const handleSubmit = async (data) => {
    console.log("Profile Data:", data);
    // Simulate a successful profile update
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProfileForm handleSubmit={handleSubmit} {...args} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export const Default = {
  render: (args) => <Template {...args} />,
  args: {
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  },
};