import React from "react";
import TextInput from "../components/form/TextInput";
import { FaUser } from "react-icons/fa";

export default {
  title: "Components/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  variant: "default",
  inputSize: "md",
  placeholder: "Enter text...",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined Input",
  variant: "outlined",
  inputSize: "md",
  placeholder: "Enter text...",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled Input",
  variant: "filled",
  inputSize: "md",
  placeholder: "Enter text...",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Input with Error",
  variant: "default",
  inputSize: "md",
  placeholder: "Enter text...",
  error: "This field is required.",
};

export const WithCustomIconLeft = Template.bind({});
WithCustomIconLeft.args = {
  label: "Input with Custom Icon on Left",
  variant: "default",
  inputSize: "md",
  placeholder: "Enter text...",
  icon: <FaUser className="w-4 h-4" />,
  iconPosition: "left",
};

export const WithCustomIconRight = Template.bind({});
WithCustomIconRight.args = {
  label: "Input with Custom Icon on Right",
  variant: "default",
  inputSize: "md",
  placeholder: "Enter text...",
  icon: <FaUser className="w-4 h-4" />,
  iconPosition: "right",
};

// New story for password input
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password Input",
  variant: "default",
  inputSize: "md",
  placeholder: "Enter your password...",
  isPassword: true, // Set isPassword to true
};
