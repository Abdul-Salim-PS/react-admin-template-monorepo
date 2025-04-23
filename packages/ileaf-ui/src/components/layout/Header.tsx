"use client";
import React, { ReactNode } from "react";
import { useSidebarContext } from "../../context/SidebarContext";
import Profile, { ProfileLink } from "./Profile";
import { LuMenu } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { useHeaderContext } from "../../context/HeaderContext";
import { ConfirmPromptProvider } from "@context/ConfirmContext";
import { cn } from "@lib/utils";

interface HeaderProps {
  logo?: string; // Logo URL
  className?: string; // Additional classes for custom styling,
  headerClass?: string;
  children?: ReactNode;
  profileLinks?: ProfileLink[];
  userName?: string;
  profileImage?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  logo = "https://www.ileafsolutions.com/assets/images/logo.svg",
  profileLinks = [],
  headerClass = "text-[18px] font-normal",
  userName = "",
  profileImage = "",
  className = "",
}) => {
  const location = useLocation();
  const { toggleSidebar, primaryItems, secondaryItems } = useSidebarContext();
  const { customTitle } = useHeaderContext();
  const isMobile =
    window &&
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const getTitle = () => {
    const currentPath = location.pathname;

    const primaryItem = primaryItems.find((item) => item.path === currentPath);
    if (primaryItem) return primaryItem.label;

    const secondaryItem = secondaryItems.find(
      (item) => item.path === currentPath
    );
    if (secondaryItem) return secondaryItem.label;

    return "Welcome Back"; // Fallback title
  };

  return (
    <ConfirmPromptProvider>
      <header
        className={cn(
          "w-full font-primary bg-gray-50 h-[80px] flex items-center px-2 lg:px-4 justify-between",
          className
        )}
      >
        <div className="flex md:hidden gap-2">
          {isMobile ? (
            <button className="" onClick={toggleSidebar}>
              <LuMenu />
            </button>
          ) : (
            ""
          )}
          <div className={"h-6"}>
            <img src={logo} alt="Logo" className="h-full w-full" />
          </div>
        </div>
        <div>
          <p className={`hidden md:block ${headerClass}`}>
            {customTitle && customTitle !== "" ? customTitle : getTitle()}
          </p>
        </div>
        <div className="">{children}</div>
        <div className="">
          <Profile
            userName={userName}
            profileImg={profileImage}
            profileLinks={profileLinks}
          />
        </div>
      </header>
    </ConfirmPromptProvider>
  );
};

export default Header;
