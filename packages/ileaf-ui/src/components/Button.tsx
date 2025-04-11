"use client";
import React from "react";
import Spinner from "./Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "transparent" | "success";
  disabled?: boolean;
  loading?: boolean;
  extraClasses?: string;
  size?: "sm" | "md" | "lg";
  loaderColor?: string;
}

/**
 * Button component for user interactions.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the button.
 * @param {() => void} [onClick] - Optional click handler for the button.
 * @param {"primary" | "secondary" | "danger" | "transparent" | "success"} [variant] - The visual style of the button.
 * @param {boolean} [disabled] - If true, the button will be disabled.
 * @param {boolean} [loading] - If true, a loading spinner will be displayed.
 * @param {string} [extraClasses] - Additional CSS classes for custom styling.
 * @param {"sm" | "md" | "lg"} [size] - The size of the button.
 * @param {string} loaderColor - The color of the loading spinner.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  extraClasses = "",
  size = "md",
  loaderColor = "#000",
  ...props
}) => {
  const baseStyles =
    "rounded-[10px] font-primary hover:shadow-md font-semibold focus:outline-none disabled:opacity-50 flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    danger: "bg-red-500 text-white",
    success: "bg-green-600 text-white",
    transparent: "bg-transparent text-black border border-black",
  };

  return (
    <button
      className={`${extraClasses} ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {loading && <Spinner color={loaderColor} className="w-4 h-4" />}
    </button>
  );
};

export default Button;
