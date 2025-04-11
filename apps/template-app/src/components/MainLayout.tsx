import { Header, HeaderProvider, Sidebar, SidebarProvider } from "ileaf-ui";
import { LuCircleUser, LuHouse, LuSettings, LuUser } from "react-icons/lu";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <SidebarProvider
        primaryItems={[
          { label: "Home", Icon: LuHouse, path: "/" },
          { label: "Users", Icon: LuUser, path: "/users" },
        ]}
        secondaryItems={[
          { label: "Settings", Icon: LuSettings, path: "/settings" },
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
                  Icon: LuCircleUser,
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
