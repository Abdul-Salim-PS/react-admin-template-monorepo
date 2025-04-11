"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label for the input
  variant?: "default" | "outlined" | "filled"; // Different styles for the input
  inputSize?: "sm" | "md" | "lg"; // Size of the input
  outerContainerClass?: string; // class for outermost container
  containerClass?: string; // Additional CSS classes for custom styling
  inputClasses?: string; // Additional CSS classes for the input element
  loading?: boolean; // Optional loading state
  error?: string; // Optional error message
  icon?: React.ReactNode; // Accepts React icons or SVGs
  iconPosition?: "left" | "right"; // Position of the icon
  iconContainerClasses?: string; // Custom classes for the icon container
  isPassword?: boolean; // New prop to indicate if the input is a password
  eyeIcon?: React.ReactNode; // Icon for showing password
  eyeClosedIcon?: React.ReactNode; // Icon for hiding password
}

/**
 * TextInput component for user input.
 *
 * @param {string} [label] - Optional label for the input.
 * @param {"default" | "outlined" | "filled"} [variant] - The visual style of the input.
 * @param {"sm" | "md" | "lg"} [inputSize] - The size of the input.
 * @param {string} [outerContainerClass] - Additional CSS classes for custom styling.
 * @param {string} [containerClass] - Additional CSS classes for custom styling.
 * @param {boolean} [loading] - If true, indicates a loading state.
 * @param {string} [error] - Optional error message to display.
 * @param {React.ReactNode} [icon] - Accepts React icons or SVGs to display.
 * @param {"left" | "right"} [iconPosition] - Position of the icon.
 * @param {string} [iconContainerClasses] - Custom classes for the icon container.
 * @param {boolean} [isPassword] - Indicates if the input is a password.
 * @param {React.ReactNode} [eyeIcon] - Icon for showing password.
 * @param {React.ReactNode} [eyeClosedIcon] - Icon for hiding password.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} rest - Other input attributes.
 */
const TextInput: React.FC<TextInputProps> = ({
  label,
  variant = "default",
  inputSize = "md",
  outerContainerClass = "",
  containerClass = "",
  inputClasses = "",
  loading = false,
  error,
  icon,
  iconPosition = "left",
  iconContainerClasses = "bg-gray-200", // Default value for icon container classes
  isPassword = false, // Default to false
  eyeIcon = <FaEye />,
  eyeClosedIcon = <FaEyeSlash />,
  ...rest
}) => {
  console.log(inputClasses, outerContainerClass, "Hi");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const baseStyles =
    "focus:outline-none transition duration-200 w-full rounded-[10px]";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-3 text-lg",
  };

  const variantStyles = {
    default: "border border-[#D2D4D7] focus-within:border-blue-500",
    outlined: "border-2 border-[#D2D4D7] focus-within:border-blue-500",
    filled: "bg-gray-100 focus-within:bg-gray-100",
  };

  const errorStyles = "border-red-500"; // Error styling

  const inputPadding = icon
    ? iconPosition === "left"
      ? "pl-12"
      : "pr-12"
    : "";

  return (
    <div className={`flex flex-col ${outerContainerClass} w-full`}>
      {label && <label className="mb-1 text-xs md:text-sm">{label}</label>}
      <div
        className={`relative flex items-center ${error ? errorStyles : ""} ${variantStyles[variant]} w-full rounded-[10px] ${containerClass}`}
      >
        {icon && iconPosition === "left" && (
          <div
            className={`flex items-center rounded-l-[10px] justify-center absolute left-0 px-3 h-full ${iconContainerClasses}`}
          >
            <span>{icon}</span>
          </div>
        )}
        <input
          type={isPassword && !showPassword ? "password" : "text"} // Toggle password visibility
          className={`${baseStyles} ${sizeStyles[inputSize]} ${inputPadding} ${iconPosition === "right" ? "pr-10" : ""} ${inputClasses}autofill:bg-white 
            autofill:shadow-[inset_0_0_0px_1000px_white] autofill:text-black`}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            className="absolute right-0 px-3 h-full cursor-pointer"
          >
            {showPassword ? eyeIcon : eyeClosedIcon}{" "}
            {/* Render appropriate icon */}
          </button>
        )}
        {icon && iconPosition === "right" && (
          <div
            className={`flex items-center justify-center absolute rounded-r-[10px] right-0 px-3 h-full ${iconContainerClasses}`}
          >
            <span>{icon}</span>
          </div>
        )}
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default TextInput;
