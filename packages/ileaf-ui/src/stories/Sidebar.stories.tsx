import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "../context/SidebarContext";
import Header from "../components/layout/Header";
import { LuHome, LuSettings, LuUser } from "react-icons/lu";
import { HeaderProvider } from "../context/HeaderContext";
import { SidebarProps } from "../types/sidebar.interface";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const Wrapper = (args: SidebarProps) => {
  return (
    <BrowserRouter>
      <SidebarProvider
        primaryItems={[
          { label: "Home", Icon: LuHome, path: "/" },
          { label: "About", Icon: LuUser, path: "/about" },
        ]}
        secondaryItems={[
          { label: "Settings", Icon: LuSettings, path: "/settings" },
        ]}
      >
        <HeaderProvider>
          <Template {...args} />
        </HeaderProvider>
      </SidebarProvider>
    </BrowserRouter>
  );
};
const Template = (args: SidebarProps) => {
  return (
    <div className="flex">
      <Sidebar {...args} />
      <Header
        profileLinks={[
          {
            label: "Profile",
            path: "/profile",
            Icon: LuUser,
          },
        ]}
      />
    </div>
  );
};

export const Default = {
  render: (args: SidebarProps) => <Wrapper {...args} />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Basic table with default styling and functionality.",
      },
    },
  },
};
