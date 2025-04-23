"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuX, LuChevronLeft } from "react-icons/lu";
import { useSidebarContext } from "../../context/SidebarContext";
import { SidebarProps } from "../../types/sidebar.interface";

const Sidebar: React.FC<SidebarProps> = ({
  logo = "https://www.ileafsolutions.com/assets/images/logo.svg",
  className = "",
  primaryHeader = "Menu",
  secondaryHeader = "User",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { showSidebar, toggleSidebar, primaryItems, secondaryItems } =
    useSidebarContext();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`font-primary ${isMobile ? "fixed inset-y-0 left-0 z-50" : ""} flex flex-col h-screen overflow-hidden bg-white transition-transform duration-300 ${isMobile ? (showSidebar ? "translate-x-0" : "-translate-x-full") : ""} ${isCollapsed ? "items-center px-1" : "px-3 min-w-54 max-w-sm"} ${className}`}
    >
      <>
        <div
          className={`items-center justify-end md:justify-between p-4 flex h-24 gap-x-3 gap-y-1 ${isCollapsed ? "flex-col" : ""}`}
        >
          <button
            onClick={toggleCollapse}
            className={`hidden md:block ${isCollapsed ? "cursor-pointer" : ""}`}
          >
            <div className={`${isCollapsed ? "h-6" : "h-8"}`}>
              <img src={logo} alt="Logo" className="h-full w-full" />
            </div>
          </button>
          <button
            onClick={toggleSidebar} // Close sidebar on mobile
            className="block md:hidden bg-transparent border-none focus:ring-0 p-2 rounded-full cursor-pointer"
          >
            <LuX />
          </button>
          {isCollapsed ? (
            ""
          ) : (
            <button
              onClick={toggleCollapse} // Collapse on medium devices
              className="bg-[#ECF3FE] p-2 rounded-full cursor-pointer hidden md:block"
            >
              <LuChevronLeft size="12" />
            </button>
          )}
        </div>
        <div
          className={`flex flex-col justify-between h-full overflow-y-auto flex-grow transition-all duration-300 ${isCollapsed ? "" : ""} py-5`}
        >
          <div className="flex flex-col">
            {primaryHeader ? (
              <p className="px-4 text-[#717171] text-xs mb-2 uppercase">
                {primaryHeader}
              </p>
            ) : (
              ""
            )}

            <div className="flex flex-col gap-y-2 items-center">
              {primaryItems.map(({ Icon, label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={`flex ${isCollapsed ? "w-fit" : "w-full"} items-center px-4 py-2 rounded-md gap-2 ${isActive(path) ? "bg-primary text-white" : "hover:bg-primary text-secondary hover:text-white"}`}
                >
                  <span className="">{Icon}</span>
                  {!isCollapsed && <span className="text-lg">{label}</span>}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {secondaryHeader ? (
              <p className="px-4 text-[#717171] text-xs mb-2 uppercase">
                {secondaryHeader}
              </p>
            ) : (
              ""
            )}

            {secondaryItems && (
              <div className={`mt-auto ${isCollapsed ? "mx-auto" : ""}`}>
                {secondaryItems.map(({ Icon, label = "", path = "" }) => (
                  <Link
                    key={label}
                    to={path}
                    className={`flex items-center gap-2 px-4 py-2 ${isCollapsed ? "w-fit" : "w-full"} ${isActive(path) ? "bg-primary text-white" : "hover:text-white text-secondary hover:bg-primary"} rounded-md`}
                  >
                    <span className="">{Icon}</span>
                    {!isCollapsed && <span>{label}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
