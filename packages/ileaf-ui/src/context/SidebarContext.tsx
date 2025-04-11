"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface SidebarContextType {
  showSidebar: boolean;
  toggleSidebar: () => void;
  primaryItems: SidebarItem[];
  secondaryItems: SidebarItem[];
}

interface SidebarItem {
  label: string;
  Icon: React.ElementType; // Adjusted to use React.ElementType for icons
  path: string;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{
  children: React.ReactNode;
  primaryItems?: SidebarItem[];
  secondaryItems?: SidebarItem[];
}> = ({ children, primaryItems = [], secondaryItems = [] }) => {
  // Check if the screen width is less than 768 pixels
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // Set initial state based on screen width
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  // Optional: Add an event listener to handle window resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setShowSidebar(!isMobile); // Update showSidebar based on new width
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
        primaryItems,
        secondaryItems,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
