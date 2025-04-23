"use client";

import React from "react";
import { Outlet } from "react-router-dom";

/**
 * Props for the AuthLayout component.
 * @param title - The title displayed in the layout.
 * @param logoSrc - The source URL for the logo image.
 * @param backgroundImage - The source URL for the background image on left.
 * @param backgroundColor - The background color of the left layout.
 * @param children - The content to be displayed in the right section.
 * @param headerColor - The color of the header text.
 * @param leftContainerClasses - Additional CSS classes for the left container.
 * @param rightContainerClasses - Additional CSS classes for the right container.
 */
interface AuthLayoutProps {
  title?: string;
  logoSrc?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  headerColor?: string;
  leftContainerClasses?: string;
  rightContainerClasses?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title = "Welcome Back",
  logoSrc,
  backgroundImage,
  backgroundColor = "#eaeaea",
  children,
  headerColor = "#111",
  leftContainerClasses = "",
  rightContainerClasses = "",
}) => {
  return (
    <div className="flex flex-col max-w-lg rounded-lg overflow-hidden lg:h-[90%] w-[90%] lg:max-w-5xl lg:flex-row shadow-lg mx-auto">
      {/* Left Section */}
      <div
        className={`w-full lg:w-1/2 gap-y-4 h-full p-8 flex flex-col items-center lg:justify-between ${leftContainerClasses}`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: backgroundColor ? backgroundColor : "#eaeaea",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Logo Container */}
        <div className="self-start max-w-24 lg:max-w-36">
          {logoSrc && (
            <img src={logoSrc} alt="Logo" className="w-full object-contain" />
          )}
        </div>

        {/* Title Container */}
        <div className="self-start">
          {title && (
            <h1
              className={`text-3xl lg:text-6xl font-semibold font-primary`}
              style={{
                color: headerColor,
              }}
            >
              {title}
            </h1>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`w-full mx-auto lg:w-1/2 py-8 lg:p-8 overflow-y-auto bg-white ${rightContainerClasses}`}
      >
        <div className="flex items-center justify-center min-h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
