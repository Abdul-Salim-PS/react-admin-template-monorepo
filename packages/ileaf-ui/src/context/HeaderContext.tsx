"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderContextType {
  customTitle: string;
  setCustomTitle: (title: string) => void;
  resetCustomTitle: () => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [customTitle, setCustomTitle] = useState<string>("Default Title");
  const location = useLocation();

  const resetCustomTitle = () => {
    setCustomTitle("");
  };

  useEffect(() => {
    resetCustomTitle(); // Reset the custom title when the route changes
  }, [location.pathname]);

  return (
    <HeaderContext.Provider
      value={{ customTitle, setCustomTitle, resetCustomTitle }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
