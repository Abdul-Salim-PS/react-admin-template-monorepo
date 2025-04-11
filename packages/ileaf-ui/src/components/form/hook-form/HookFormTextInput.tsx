"use client";

import React from "react";
import { useController } from "react-hook-form";
import TextInput from "../TextInput";

interface HookFormTextInputProps {
  name: string;
  label?: string;
  variant?: "default" | "outlined" | "filled";
  inputSize?: "sm" | "md" | "lg";
  containerClass?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconContainerClasses?: string;
  isPassword?: boolean;
}

const HookFormTextInput: React.FC<HookFormTextInputProps> = ({
  name,
  label,
  variant = "default", // Default value
  inputSize = "md", // Default value
  containerClass,
  loading,
  icon,
  iconPosition,
  iconContainerClasses,
  isPassword,
}) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name });

  return (
    <TextInput
      {...field}
      label={label}
      variant={variant}
      inputSize={inputSize}
      containerClass={containerClass}
      loading={loading}
      error={fieldError?.message}
      icon={icon}
      iconPosition={iconPosition}
      iconContainerClasses={iconContainerClasses}
      isPassword={isPassword}
    />
  );
};

export default HookFormTextInput;
