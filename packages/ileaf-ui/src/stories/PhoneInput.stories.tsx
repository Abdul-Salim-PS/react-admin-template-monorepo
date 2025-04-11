import React from "react";
import PhoneInput from "../components/form/PhoneNumberInput";
import { Value } from "react-phone-number-input";

export default {
  title: "Components/PhoneInput",
  component: PhoneInput,
};

const Template = (args) => {
  return <PhoneInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Phone Number",
  value: undefined,
  onChange: (value: Value) => console.log(value),
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Phone Number",
  value: undefined,
  error: "Invalid phone number",
  onChange: (value: Value) => console.log(value),
};
