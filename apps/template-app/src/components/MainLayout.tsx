"use client";

import { useUserStore } from "../store/userStore";
import { Header, HeaderProvider, Sidebar, SidebarProvider } from "ileaf-ui";
import { useEffect, useState } from "react";
import {
  LuBox,
  LuHome,
  LuSettings,
  LuUser,
  LuUserCircle,
} from "react-icons/lu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isLoggedIn, login } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      login({
        email: "test@email.com",
        first_name: "Test",
        id: "",
        last_name: "User",
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-2xl animate-pulse font-bold text-black">
          Authenticating.....
        </p>
      </div>
    );

  if (isLoggedIn)
    return (
      <div className="flex h-screen w-screen">
        <SidebarProvider
          primaryItems={[
            { label: "Home", Icon: <LuHome size={18} />, path: "/" },
            { label: "Users", Icon: <LuUser size={18} />, path: "/users" },
            { label: "Items", Icon: <LuBox size={18} />, path: "/items" },
          ]}
          secondaryItems={[
            {
              label: "Settings",
              Icon: <LuSettings size={18} />,
              path: "/settings",
            },
          ]}
        >
          <HeaderProvider>
            <Sidebar logo="https://www.ileafsolutions.com/assets/images/logo.svg" />
            <div className="flex flex-col w-full overflow-x-hidden">
              <Header
                profileLinks={[
                  {
                    label: "Profile",
                    path: "/profile",
                    Icon: LuUserCircle,
                  },
                ]}
                userName="Abdul"
                className=""
                profileImage="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
              />
              <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto">
                  <div className="min-h-full p-4">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </HeaderProvider>
        </SidebarProvider>
      </div>
    );
};

export default MainLayout;
