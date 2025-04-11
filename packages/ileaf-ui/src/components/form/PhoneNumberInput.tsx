"use client";
import PhoneNumberInput, { Value } from "react-phone-number-input";
import React from "react";
import TextInput from "./TextInput";
import { CountrySelectWithIcon } from "./CountrySelect";

export type PhoneInputProps = {
  label?: string;
  inputClass?: string;
  containerClass?: string;
  onChange: (value?: Value) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: Value;
  error?: string;
};

const errorStyles = "!border-red-500";

const CustomInput = ({
  containerClass = "w-full !border-0",
  inputClasses = "w-full !border-0 !focus:outline-0",
  ...props
}) => {
  console.log(containerClass);
  return (
    <TextInput
      containerClass={containerClass}
      inputClasses={inputClasses}
      outerContainerClass=""
      {...props}
    />
  );
};

const PhoneInput = ({
  inputClass = "w-full !focus:ring-0 !focus-visible:ring-0 !border-0 focus:border-0 !focus:outline-0",
  containerClass = "",
  value,
  label,
  error,
  ...props
}: PhoneInputProps) => {
  return (
    <div className={`flex flex-col`}>
      {label && <label className="mb-1">{label}</label>}
      <div
        className={`relative flex items-center border ${containerClass} ${error ? errorStyles : ""}`}
      >
        <PhoneNumberInput
          defaultCountry="IN"
          value={value || ""}
          className={`${inputClass} !border-0 py-2 px-3`}
          containerComponent={"div"}
          countrySelectProps={{
            className: "px-3 border-r border-r-gray-300",
          }}
          containerComponentProps={{
            className: "p-0 flex w-full border border-gray-300",
          }}
          countrySelectComponent={CountrySelectWithIcon}
          inputComponent={CustomInput}
          inputComponentProps={{
            inputClasses: `!border-none ${inputClass}`,
            containerClass: "w-full !border-0",
          }}
          {...props}
        />
      </div>
    </div>
  );
};

// PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
