"use client";

import React from "react";
import { useController } from "react-hook-form";
import Checkbox from "../Checkbox";

interface HookFormCheckboxProps {
  name: string;
  label?: string;
  containerClasses?: string;
  labelClasses?: string;
  inputClasses?: string;
}

const HookFormCheckbox: React.FC<HookFormCheckboxProps> = ({
  name,
  label,
  containerClasses,
  labelClasses,
  inputClasses,
}) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name });

  return (
    <Checkbox
      checked={field.value}
      onChange={field.onChange}
      label={label}
      containerClasses={containerClasses}
      labelClasses={labelClasses}
      inputClasses={inputClasses}
      error={fieldError?.message}
    />
  );
};

export default HookFormCheckbox;
