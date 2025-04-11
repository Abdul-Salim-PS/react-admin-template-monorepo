"use client";

import { cn } from "@lib/utils";
import React from "react";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClasses?: string;
  labelClasses?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClasses?: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  containerClasses,
  labelClasses,
  inputClasses,
  error,
  ...props
}) => {
  return (
    <>
      <label className={cn("flex flex-row", containerClasses)}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={cn(inputClasses)}
          {...props}
        />
        {label ? (
          <span className={cn("text-sm font-semibold", labelClasses)}>
            {label}
          </span>
        ) : (
          ""
        )}
      </label>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </>
  );
};

export default Checkbox;
